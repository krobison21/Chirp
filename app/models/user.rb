class User < ActiveRecord::Base
    has_secure_password 
    has_many :sightings
    
    validates_presence_of :name
    #validates_confirmation_of :password, :if => :is_created?
    validates :email, :presence => true, :uniqueness => {:message => "- There is already an existing account linked to that email" }, format: { with: /\A([^@\s]+)@((?:[-a-z0-9]+\.)+[a-z]{2,})\z/i, on: :create }, :if => :is_created?
    validates_length_of :name, :maximum => 50, :if => :is_guest?

    def self.from_omniauth(auth)
      where(provider: auth.provider, uid: auth.uid).first_or_initialize do |user|
        user.provider = auth.provider
        user.uid = auth.uid
        user.name = auth.info.name
        user.oauth_token = auth.credentials.token
        user.oauth_expires_at = Time.at(auth.credentials.expires_at)
        user.password_digest = 'facebook'
        user.save!
     end
    end
    
  
    def is_created?
      self.provider == 'created'
    end
    def is_guest?
      self.provider == 'guest'
    end
    #validates_presence_of :state, :granted_at, :if => lambda {self.type != 1}

end

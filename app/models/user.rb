class User < ActiveRecord::Base
    has_secure_password

    has_many :sightings
    
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
end

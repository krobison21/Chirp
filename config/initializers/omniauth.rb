OmniAuth.config.logger = Rails.logger
 
Rails.application.config.middleware.use OmniAuth::Builder do
<<<<<<< HEAD
  provider :facebook, '331863843848775', '5b4e11b495140d25374d99c2666f3a80', {:client_options => {:ssl => {:ca_file => Rails.root.join("cacert.pem").to_s}}}
=======

  provider :facebook, 'APP ID', 'SECRET KEY', {:client_options => {:ssl => {:ca_file => Rails.root.join("cacert.pem").to_s}}}

>>>>>>> master
end
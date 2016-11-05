OmniAuth.config.logger = Rails.logger
 
Rails.application.config.middleware.use OmniAuth::Builder do
  provider :facebook, 'APP ID', 'SECRET KEY', {:client_options => {:ssl => {:ca_file => Rails.root.join("cacert.pem").to_s}}}
end
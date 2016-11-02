OmniAuth.config.logger = Rails.logger
 
Rails.application.config.middleware.use OmniAuth::Builder do
  provider :facebook, '1772681509665630', 'de99385ce55646c7eee705458f5e942e', {:client_options => {:ssl => {:ca_file => Rails.root.join("cacert.pem").to_s}}}
end
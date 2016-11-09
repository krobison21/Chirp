OmniAuth.config.logger = Rails.logger
 
Rails.application.config.middleware.use OmniAuth::Builder do

  provider :facebook, '1640791832885992', '1b39384c83c663c97db80f82615fcb9c', {:client_options => {:ssl => {:ca_file => Rails.root.join("cacert.pem").to_s}}}

end
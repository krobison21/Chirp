OmniAuth.config.logger = Rails.logger
 
Rails.application.config.middleware.use OmniAuth::Builder do

  provider :facebook, '1772685836331864', 'ec4c79deae51eb0a555ca30ceefc4353', {:client_options => {:ssl => {:ca_file => Rails.root.join("cacert.pem").to_s}}}

end
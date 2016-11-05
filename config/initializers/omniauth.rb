OmniAuth.config.logger = Rails.logger
 
Rails.application.config.middleware.use OmniAuth::Builder do
  provider :facebook, '1772685836331864', 'ba37853a87dcd79c202090e5d28cb6ca', {:client_options => {:ssl => {:ca_file => Rails.root.join("cacert.pem").to_s}}}
end
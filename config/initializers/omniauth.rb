OmniAuth.config.logger = Rails.logger
 
Rails.application.config.middleware.use OmniAuth::Builder do

<<<<<<< HEAD
  provider :facebook, '1640791832885992', '1b39384c83c663c97db80f82615fcb9c', {:client_options => {:ssl => {:ca_file => Rails.root.join("cacert.pem").to_s}}}
=======
  provider :facebook, '1772685836331864', 'ec4c79deae51eb0a555ca30ceefc4353', {:client_options => {:ssl => {:ca_file => Rails.root.join("cacert.pem").to_s}}}
>>>>>>> master

end
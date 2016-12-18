Rails.application.routes.draw do
  
  get 'auth/:provider/callback', to: 'sessions#create_fb', as: :fblogin
  get 'auth/failure', to: redirect('/')
  get 'signout', to: 'sessions#destroy', as: 'signout'
 
  #resources :sessions, only: [:create, :destroy]
  resource :home, only: [:show]
 
 #regular log in:
  get    '/login',   to: 'sessions#new', as: :login
  post   '/login',   to: 'sessions#create_reg'
  
  root to: "home#show"
  #root 'sightings#welcome'
  get 'sightings' => 'sightings#index'
  get 'sightings/new/' => 'sightings#new', as: :submit
  post 'sightings' => 'sightings#create', as: :allSightings
  get 'info' => 'sightings#info'
  
  #Creating an account:
  get 'users' => 'users#index' , as: :allUsers
  get 'users/new' => 'users#new', as: :newUser
  post 'users' => 'users#create'
  
  #Log in as Guest:
  get 'guest' => 'users#newguest', as: :guest
  
  
  #User Dashboard:
  get 'users/:id' => 'users#show', as: :user

  
  # The priority is based upon order of creation: first created -> highest priority.
  # See how all your routes lay out with "rake routes".

  # You can have the root of your site routed with "root"
  # root 'welcome#index'

  # Example of regular route:
  #   get 'products/:id' => 'catalog#view'

  # Example of named route that can be invoked with purchase_url(id: product.id)
  #   get 'products/:id/purchase' => 'catalog#purchase', as: :purchase

  # Example resource route (maps HTTP verbs to controller actions automatically):
  #   resources :products

  # Example resource route with options:
  #   resources :products do
  #     member do
  #       get 'short'
  #       post 'toggle'
  #     end
  #
  #     collection do
  #       get 'sold'
  #     end
  #   end

  # Example resource route with sub-resources:
  #   resources :products do
  #     resources :comments, :sales
  #     resource :seller
  #   end

  # Example resource route with more complex sub-resources:
  #   resources :products do
  #     resources :comments
  #     resources :sales do
  #       get 'recent', on: :collection
  #     end
  #   end

  # Example resource route with concerns:
  #   concern :toggleable do
  #     post 'toggle'
  #   end
  #   resources :posts, concerns: :toggleable
  #   resources :photos, concerns: :toggleable

  # Example resource route within a namespace:
  #   namespace :admin do
  #     # Directs /admin/products/* to Admin::ProductsController
  #     # (app/controllers/admin/products_controller.rb)
  #     resources :products
  #   end
end

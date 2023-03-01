Rails.application.routes.draw do

  get '*path',
      to: 'fallback#index',
      constraints: ->(req) { !req.xhr? && req.format.html? }

  # users
  get '/me', to: 'users#show'
  post '/register', to: 'users#create'
  patch '/edit', to: 'users#patch'
  delete '/edit', to: 'users#destroy'

  # sessions
  # post '/login', to: 'sessions#create'
  # delete '/logout', to: 'sessions#destroy'

  # addresses
  get '/addresses', to: 'addresses#index'
  get '/addresses', to: 'addresses#show'
  post '/addresses', to: 'addresses#create'
  patch '/addresses', to: 'addresses#update'

  # companies
  get '/companies', to: 'companies#index'
  get '/companies', to: 'companies#show'
  post '/companies', to: 'companies#create'
  patch '/companies', to: 'companies#update'
  delete '/companies', to: 'companies#destroy'

  # clients
  get '/clients', to: 'clients#index'
  get '/clients', to: 'clients#show'
  post '/clients', to: 'clients#create'
  patch '/clients', to: 'clients#update'
  delete '/clients', to: 'clients#destroy'

  # contracts
  get '/contracts', to: 'contracts#index'
  get '/contracts', to: 'contracts#show'
  post '/contracts', to: 'contracts#create'
  patch '/contracts', to: 'contracts#update'
  delete '/contracts', to: 'contracts#destroy'

  # employees
  get '/employees', to: 'employees#index'
  get '/employees', to: 'employees#show'
  post '/employees', to: 'employees#create'
  patch '/employees', to: 'employees#update'
  delete '/employees', to: 'employees#destroy'

  # projects
  get '/projects', to: 'projects#index'
  get '/projects', to: 'projects#show'
  post '/projects', to: 'projects#create'
  patch '/projects', to: 'projects#update'
  delete '/projects', to: 'projects#destroy'

  # skills
  get '/skills', to: 'skills#index'
  get '/skills', to: 'skills#show'
  post '/skills', to: 'skills#create'
  patch '/skills', to: 'skills#update'
  delete '/skills', to: 'skills#destroy'

  # subcontractors
  get '/subcontractors', to: 'subcontractors#index'
  get '/subcontractors', to: 'subcontractors#show'
  post '/subcontractors', to: 'subcontractors#create'
  patch '/subcontractors', to: 'subcontractors#update'
  delete '/subcontractors', to: 'subcontractors#destroy'

  get '/zips', to: 'zips#index'
  get '/zips', to: 'zips#show'

  resources :users
  resources :addresses
  resources :clients
  resources :client_companies
  resources :contracts
  resources :employees
  resources :projects
  resources :skills
  resources :subcontractors
  resources :zips
end

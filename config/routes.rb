Rails.application.routes.draw do

  # resources :sessions
  resources :addresses
  resources :clients
  resources :client_companies
  resources :contracts
  resources :employees
  resources :projects
  resources :skills
  resources :subcontractors
  resources :zips, only: [:index, :show]

  resources :users, only: [:index, :show, :create]

  get "/me", to: "users#show"
  # post "/signup", to: "users#create"
  # post "/login", to: "sessions#create"
  # delete "/logout", to: "sessions#destroy"

  get '*path',
    to: 'fallback#index',
    constraints: ->(req) { !req.xhr? && req.format.html? }

end

Rails.application.routes.draw do
  resources :users, only: [:create]
  root 'welcome#index'
end

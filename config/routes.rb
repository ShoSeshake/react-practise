Rails.application.routes.draw do
  devise_for :users
  root to: 'sites#index'

  namespace :api do
    namespace :v1 do
      resources :tweets, only: [:index, :create, :destroy, :update]
    end
  end
end

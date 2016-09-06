Rails.application.routes.draw do

  root to: 'static_pages#root';

  namespace :api, defaults: {format: :json} do
    resources :users, only: [:create, :show, :update, :index]
    resource :session, only: [:create, :destroy]
    resources :groups, only: [:index, :create, :show, :update, :destroy]
    resources :events, only: [:index, :create, :show, :update, :destroy] do
      member do
        post "close_poll"
      end
      resource :event_response, only: [:show, :create, :update, :destroy]
    end
    resources :event_responses, only: [] do
      resource :condition, only: [:create, :update, :show]
      resource :availability_bitmap, only: [:show, :create, :update]
    end
  end

end

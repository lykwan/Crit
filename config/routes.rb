Rails.application.routes.draw do

  root to: 'static_pages#root';

  namespace :api, defaults: {format: :json} do
    resources :users, only: [:create, :show, :update, :index]
    resource :session, only: [:create, :destroy]
    resources :groups, only: [:index, :create, :show, :update, :destroy] do
      resource :group_membership, only: [:create, :destroy]
    end
    resources :events, only: [:index, :create, :show, :update, :destroy] do
      member do
        post "close_response_poll"
        post "close_schedule_poll"
      end
      resource :event_response, only: [:show, :create, :update, :destroy]
      resources :availabilities, only: [:index, :create]
      resource :availabilities, only: [:update]
    end
    resources :event_responses, only: [] do
      resource :condition, only: [:create, :update, :show]
    end
  end

end

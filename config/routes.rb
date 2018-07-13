Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  scope '/api' do
    resources :words, only: [:index, :show]
    resources :high_scores, only: [:index, :create]
  end
end

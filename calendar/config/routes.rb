Rails.application.routes.draw do
  root 'appointments#index'
  get 'appointments/index'
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end

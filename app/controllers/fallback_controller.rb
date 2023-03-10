class FallbackController < ActionController::Base
  include ActionController::Cookies
  
  def index
    render file: 'public/index.html'
  end
end
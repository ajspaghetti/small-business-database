class User < ApplicationRecord
    has_many :companies
    has_many :projects, through: :companies
    has_many :clients, through: :companies
    
    has_one :access_level
end

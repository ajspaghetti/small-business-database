class ZipCode < ApplicationRecord
    has_many :cities
    has_one :county, through: :city
    has_one :state, through: :county
    has_one :country, through: :state
    
    has_many :addresses
    has_many :companies, through: :addresses
    has_many :employees, through: :addresses
end

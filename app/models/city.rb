class City < ApplicationRecord
    # project management
    has_many :companies
    has_many :projects, through: :companies
    
    # hris
    has_many :employees
    
    # regional database
    has_many :zip_codes
    has_many :addresses, through: :zip_codes
    belongs_to :county
    belongs_to :state
    belongs_to :country
end

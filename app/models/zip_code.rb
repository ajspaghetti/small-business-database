class ZipCode < ApplicationRecord
    belongs_to :city # is this a belongs-to relationship all the way through?
    # has_many :cities
    has_one :county, through: :city
    has_one :state, through: :county
    
    has_many :addresses
    has_many :companies, through: :addresses
    has_many :employees, through: :addresses
end

class State < ApplicationRecord
    has_many :zip_codes
    has_many :cities, through: :zip_codes
    has_many :counties, through: :zip_codes
end

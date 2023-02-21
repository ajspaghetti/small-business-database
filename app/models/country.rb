class Country < ApplicationRecord
    has_many :cities, through: :counties
    has_many :counties, through: :states
    has_many :states
end

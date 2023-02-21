class State < ApplicationRecord
    has_many :counties
    has_many :cities, through: :counties
    belongs_to :country
end

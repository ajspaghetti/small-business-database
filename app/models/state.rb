class State < ApplicationRecord
    has_many :cities, through: :counties
    has_many :counties
    belongs_to :country
end

class County < ApplicationRecord
    has_many :cities
    belongs_to :state
    belongs_to :country
end

class County < ApplicationRecord
    has_many :zip_codes
    has_many :cities, through: :zip_codes
    belongs_to :state
end

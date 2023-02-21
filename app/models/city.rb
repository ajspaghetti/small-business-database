class City < ApplicationRecord
    has_many :companies
    has_many :projects, through: :companies
    has_many :employees
    belongs_to :county
    belongs_to :state
    belongs_to :country
end

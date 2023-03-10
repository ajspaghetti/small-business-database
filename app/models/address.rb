class Address < ApplicationRecord
    has_many :client_company
    has_many :client
    has_many :employee
    has_many :project
    has_many :subcontractor
    belongs_to :zip

    validates :line_one, presence: true, uniqueness: true
    validates :zip_id, numericality: { greater_than_or_equal_to: 1, less_than_or_equal_to: 99999 }, presence: true 
end
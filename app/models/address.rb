class Address < ApplicationRecord
    has_many :client_company
    has_many :client
    has_many :employee
    has_many :project
    has_many :subcontractor
    has_one :zip
end

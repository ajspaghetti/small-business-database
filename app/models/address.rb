class Address < ApplicationRecord
    has_one :zip_code
    has_one :city, through: :zip_code
    has_one :county, through: :city
    has_one :state, through: :county
    has_one :country, through: :state
    belongs_to :employee
    belongs_to :company
    belongs_to :project
    belongs_to :sales_lead
    belongs_to :hiring_lead
end

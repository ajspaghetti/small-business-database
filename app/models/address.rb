class Address < ApplicationRecord
    
    # regional database
    has_one :zip_code
    has_one :city, through: :zip_code
    has_one :county, through: :zip_code
    has_one :state, through: :zip_code

    # hris
    belongs_to :employee
    belongs_to :hiring_lead

    #project management
    belongs_to :company
    belongs_to :project
    belongs_to :sales_lead
end

class Address < ApplicationRecord
    # regional database
    belongs_to :zip_code

    # hris
    belongs_to :employee
    belongs_to :hiring_lead

    #project management
    belongs_to :company
    belongs_to :project
    belongs_to :subcontractor
    belongs_to :slc
    belongs_to :sales_lead
    belongs_to :subcontractor_lead
end

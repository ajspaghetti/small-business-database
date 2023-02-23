class PhoneNumber < ApplicationRecord
    belongs_to :employee
    belongs_to :company
    belongs_to :client
    belongs_to :subcontractor
    belongs_to :slc
    belongs_to :sales_lead
    belongs_to :hiring_lead
    belongs_to :subcontractor_lead

end

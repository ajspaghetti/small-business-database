class Email < ApplicationRecord
    belongs_to :user
    belongs_to :employee
    belongs_to :company
    belongs_to :client
    belongs_to :hiring_lead
    belongs_to :sales_lead
end

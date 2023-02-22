class SalesLead < ApplicationRecord
    #project management
    belongs_to :user
    belongs_to :company
end

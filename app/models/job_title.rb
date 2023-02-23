class JobTitle < ApplicationRecord
    belongs_to :employee
    belongs_to :hiring_lead
    belongs_to :client
end

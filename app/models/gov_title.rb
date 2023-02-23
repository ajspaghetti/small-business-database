class GovTitle < ApplicationRecord
    belongs_to :employee
    belongs_to :hiring_lead
end

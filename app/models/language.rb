class Language < ApplicationRecord
    belongs_to :employee
    belongs_to :slc
    belongs_to :client
    belongs_to :hiring_lead
end

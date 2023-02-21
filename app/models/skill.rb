class Skill < ApplicationRecord
    belongs_to :employee
    belongs_to :hiring_lead
end

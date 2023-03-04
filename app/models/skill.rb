class Skill < ApplicationRecord
    has_many :employees
    has_many :subcontractors
end
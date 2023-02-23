class EmpCategory < ApplicationRecord
    belongs_to :employee
    belongs_to :slc
    belongs_to :subcontractor
end

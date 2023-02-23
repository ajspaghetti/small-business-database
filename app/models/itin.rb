class Itin < ApplicationRecord
    belongs_to :employee
    belongs_to :subcontractor
    belongs_to :slc
end

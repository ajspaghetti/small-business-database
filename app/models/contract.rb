class Contract < ApplicationRecord
    belongs_to :project
    belongs_to :client_company
    belongs_to :client
    belongs_to :employee
    belongs_to :user
    belongs_to :subcontractor
end

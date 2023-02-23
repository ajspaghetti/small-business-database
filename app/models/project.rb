class Project < ApplicationRecord
    # project management
    belongs_to :user
    belongs_to :company
    has_many :employees
    has_many :clients
    has_many :slcs
    has_many :subcontractors, through: :slcs

    # regional database -- are the through relationships like this or different...
    has_one :address
    has_one :zip_code

end

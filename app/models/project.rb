class Project < ApplicationRecord
    # project management
    belongs_to :user
    belongs_to :company
    has_many :employees
    has_many :clients

    # regional database -- are the through relationships like this or different...
    has_one :address
    has_one :zip_code
    has_one :city, through: :zip_code
    has_one :county, through: :zip_code
    has_one :state, through: :zip_code

end

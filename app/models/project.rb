class Project < ApplicationRecord
    belongs_to :user  
    belongs_to :address
    has_many :contracts
    has_many :employees, through: :contracts
    has_many :subcontractors, through: :contracts
    has_many :clients, through: :contracts
    has_many :client_companies, through: :contracts

end

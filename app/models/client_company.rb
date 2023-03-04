class ClientCompany < ApplicationRecord
    belongs_to :address
    has_many :clients
    has_many :contracts
    has_many :projects, through: :contracts
    has_many :employees, through: :contracts
    has_many :subcontractors, through: :contracts
end

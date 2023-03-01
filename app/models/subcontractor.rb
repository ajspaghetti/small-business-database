class Subcontractor < ApplicationRecord
    has_one :address
    has_many :contracts
    has_many :projects, through: :contracts
    has_many :client_companies, through: :contracts
    has_and_belongs_to_many :skills
end

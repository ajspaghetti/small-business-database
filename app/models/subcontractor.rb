class Subcontractor < ApplicationRecord
    belongs_to :address
    has_many :contracts
    has_many :projects, through: :contracts
    has_many :client_companies, through: :contracts
    has_many :skills
end

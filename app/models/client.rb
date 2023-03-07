class Client < ApplicationRecord
    belongs_to :client_company
    has_many :contracts
    has_many :projects, through: :contracts
end

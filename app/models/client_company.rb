class ClientCompany < ApplicationRecord
    has_one :address
    has_many :clients
    has_many :contracts
    has_many :projects, through: :contracts
    has_many :employees, through: :contracts
end

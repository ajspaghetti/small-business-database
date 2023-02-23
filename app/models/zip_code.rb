class ZipCode < ApplicationRecord
    has_many :addresses
    has_many :companies, through: :addresses
    has_many :employees, through: :addresses
    has_many :subcontractors, through: :addresses
    has_many :slcs, through: :addresses
end

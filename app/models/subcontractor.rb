class Subcontractor < ApplicationRecord
    # project management
    has_many :companies
    has_many :projects
    has_many :slcs, through: :projects
    has_many :emails
    has_many :phone_numbers #some through clients... but also some assigned to the company itself...
    
    # regional database
    has_one :address # main headquarters for billing
    has_one :zip_code, through: :address
    
    # compliance
    has_one :employer_identification_number
end

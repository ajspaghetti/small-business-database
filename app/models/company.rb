class Company < ApplicationRecord
    # project management
    has_many :projects
    has_many :employees, through: :projects
    has_many :clients
    has_many :emails, through: :clients #some through clients... but also some assigned to the company itself...
    has_many :phone_numbers, through: :clients #some through clients... but also some assigned to the company itself...
    has_many :skills # specialties & subspecialties
    
    # regional database
    has_one :address # main headquarters for billing
    has_one :zip_code, through: :address
    
    # compliance
    has_one :employer_identification_number

end

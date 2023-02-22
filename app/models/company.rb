class Company < ApplicationRecord
    
    # project management
    has_many :projects
    has_many :employees, through: :projects 
    has_many :clients
    has_many :emails #some through clients... but also some assigned to the company itself...
    has_many :phone_numbers #some through clients... but also some assigned to the company itself...
    
    # regional database
    has_one :address # main headquarters for billing
    has_one :zip_code
    has_one :city
    has_one :county
    has_one :state
    
    # compliance
    has_one :employee_identification_number

end

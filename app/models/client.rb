class Client < ApplicationRecord
    
    #project management
    has_one :job_title # how to keep record of prior with date-range after an update?
    has_one :company # syntax? how to keep record of prior with date-range after an update?
    has_many :projects, through: :company # syntax? how to keep record of prior with date-range after an update?
    has_many :phone_numbers 
    has_many :emails
    has_many :languages

end

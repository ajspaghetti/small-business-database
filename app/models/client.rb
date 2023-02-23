class Client < ApplicationRecord
    
    #project management
    has_many :job_titles # how to keep record of prior with date-range after an update?
    has_many :projects # syntax? how to keep record of prior with date-range after an update?
    has_one :company
    has_many :phone_numbers 
    has_many :emails
    has_many :languages

end

class Company < ApplicationRecord
    has_many :employees
    has_many :addresses
    has_many :clients
    has_many :emails
    has_many :phone_numbers
    has_many :job_titles
    has_many :gov_job_titles
    has_one :employee_identification_number

end

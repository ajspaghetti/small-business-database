class Slc < ApplicationRecord
    #project managament
    belongs_to :subcontractor
    has_many :projects
    has_many :companies, through: :projects

    # hris
    has_many :languages
    has_many :job_titles
    has_many :gov_job_titles
    has_one :emp_category # always will be slc
    has_many :phone_numbers
    has_many :emails
    has_one :social_security_number
    has_one :itin

    #regional database
    has_one :address
    has_one :zip_code, through: :address
end

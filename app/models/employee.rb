class Employee < ApplicationRecord
    has_many :companies
    has_many :projects, through: :companies
    has_many :languages
    has_one :job_title
    has_one :address
    has_one :social_security_number
    has_one :itin
end

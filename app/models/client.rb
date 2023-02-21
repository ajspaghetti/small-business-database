class Client < ApplicationRecord
    has_one :job_title
    has_one :company # how to keep record of prior but be able to change?
    has_many :phone_numbers
    has_many :emails
    has_many :projects # how to keep record of prior but be able to change?
    has_many :languages

end

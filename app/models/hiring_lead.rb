class HiringLead < ApplicationRecord
    belongs_to :user
    has_many :languages
    has_many :skills
    has_many :job_titles
    has_many :gov_titles
    has_many :phone_numbers
    has_many :emails
end

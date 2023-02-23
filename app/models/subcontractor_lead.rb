class SubcontractorLead < ApplicationRecord
    # hris
    belongs_to :user
    belongs_to :company
    has_many :skills
    has_many :phone_numbers
    has_many :emails
end

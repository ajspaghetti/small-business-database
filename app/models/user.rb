class User < ApplicationRecord
    # project management
    has_many :projects
    has_many :companies, through: :projects
    has_many :clients, through: :projects
    has_many :sales_leads
    has_many :subcontractor_leads

    # hris
    has_many :hiring_leads

    # access
    has_one :email
    has_one :access_level
end

    ## scope
    # t.integer :email_id ✅
    # t.integer :access_level_id ✅
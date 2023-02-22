class User < ApplicationRecord
    # project management
    has_many :companies
    has_many :projects, through: :companies
    has_many :clients, through: :companies
    has_many :sales_leads

    # hris
    has_many :hiring_leads

    # access
    has_one :email
    has_one :access_level
end

    ## scope
    # t.integer :email_id ✅
    # t.integer :access_level_id ✅
class Employee < ApplicationRecord
    # project management
    has_many :companies
    has_many :projects, through: :companies

    # hris
    has_many :languages
    has_many :job_titles
    has_many :gov_job_titles
    has_one :emp_category
    has_one :social_security_number
    has_one :itin

    #regional database
    has_one :address
    has_one :zip_code
    has_one :city
    has_one :county
    has_one :state
end

## HRIS scope:
# :emp_category_id ✅
# :phone_number_id ✅
# :address_id ✅
# :zip_code_id ✅
# :city_id ✅
# :county_id ✅
# :state_id ✅
# :social_security_number_id ✅
# :itin_id ✅
# :job_title_id ✅
# :gov_title_id ✅
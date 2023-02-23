class SocialSecurityNumber < ApplicationRecord
    belongs_to :employee
    belongs_to :slc
end

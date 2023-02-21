class PhoneNumber < ApplicationRecord
    belongs_to :employee
    belongs_to :user
    belongs_to :company
    belongs_to :client
    
end

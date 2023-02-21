class Project < ApplicationRecord
    has_many :employees
    has_many :clients

    has_many_and_belongs_to :company
    
    belongs_to :user
    belongs_to :company
end

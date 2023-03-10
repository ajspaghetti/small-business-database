class Employee < ApplicationRecord
    belongs_to :address
    has_one :zip_code
    has_many :contracts
    has_many :projects, through: :contracts
    has_many :client_companies, through: :contracts
    has_many :skills

    validates :first_name, :last_name, :gender, :emp_phone, :emp_email, :address_id, :tax_number, :job_title, :skill_id, :start_date, :hourly_or_salary, :hourly_rate, :annual_salary, :pto_policy, :active, :emp_notes, presence: true
end

class EmployeeSerializer < ActiveModel::Serializer
  attributes :id, :first_name, :middle_name, :last_name, :suffix, :gender, :emp_phone, :emp_email, :address_id, :tax_number, :job_title, :skill_id, :start_date, :hourly_or_salary, :hourly_rate, :annual_salary, :pto_policy, :active?, :emp_notes, :address, :contracts, :projects, :client_companies, :skills


  belongs_to :address
  has_many :contracts
  has_many :projects, through: :contracts
  has_many :client_companies, through: :contracts
  has_many :skills
  # has_one :zip

end

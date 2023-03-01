class EmployeeSerializer < ActiveModel::Serializer
  attributes :id, :first_name, :middle_name, :last_name, :suffix, :gender, :phone, :email, :tax_number, :job_title, :skill_id, :start_date, :hourly_or_salary, :hourly_rate, :annual_salary, :pto_policy, :active?, :notes

  
  has_one :address
  has_many :contracts
  has_many :projects, through: :contracts
  has_many :client_companies, through: :contracts
  has_and_belongs_to_many :skills

end

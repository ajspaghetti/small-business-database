class ClientCompanyContractsSerializer < ActiveModel::Serializer
  attributes :id, :legal_name, :dba_name, :industry, :contract_title, :contract_value, :project_id, :client_id, :employee_id, :subcontractor_id, :user_id, :client_company

  has_one :address
  has_many :clients
  has_many :contracts
  has_many :projects, through: :contracts
  has_many :employees, through: :contracts
  has_many :subcontractors, through: :contracts
end

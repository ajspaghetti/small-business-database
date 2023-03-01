class ClientCompanyClientsSerializer < ActiveModel::Serializer
  attributes :id, :legal_name, :dba_name, :industry, :first_name, :last_name, :job_title, :client_company

  # has_one :address
  has_many :clients
  # has_many :contracts
  # has_many :projects, through: :contracts
  # has_many :employees, through: :contracts
end

class ClientCompanySerializer < ActiveModel::Serializer
  attributes :id, :legal_name, :dba_name, :industry, :phone, :email, :primary_poc_name, :poc_role, :poc_phone, :poc_email, :annual_revenue, :notes

  # has_one :address
  has_many :clients
  has_many :contracts
  has_many :projects, through: :contracts
  has_many :employees, through: :contracts

end

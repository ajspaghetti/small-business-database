class ClientCompanySerializer < ActiveModel::Serializer
  attributes :id, :legal_name, :dba_name, :industry, :address_id, :co_phone, :co_email, :primary_poc_name, :poc_role, :poc_phone, :poc_email, :annual_revenue, :cc_notes

  belongs_to :address
  has_many :clients
  has_many :contracts
  has_many :projects, through: :contracts
  has_many :employees, through: :contracts

end

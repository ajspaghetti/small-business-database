class SubcontractorSerializer < ActiveModel::Serializer
  attributes :id, :company_legal_name, :company_dba, :address_id, :primary_poc_name, :poc_role, :poc_phone, :poc_email, :sub_tax_number, :skill_id, :active?, :sub_notes

  belongs_to :address
  has_many :contracts
  has_many :projects, through: :contracts
  has_many :client_companies, through: :contracts
  has_many :skills
end
class ClientSerializer < ActiveModel::Serializer
  attributes :id, :first_name, :last_name, :job_title, :phone, :email, :client_company_id, :notes

  belongs_to :client_company
  has_many :contracts
  has_many :projects, through: :contracts

end

class ClientSerializer < ActiveModel::Serializer
  attributes :id, :first_name, :last_name, :job_title, :client_phone, :client_email, :client_company_id, :client_notes, :client_company, :contracts, :projects

  belongs_to :client_company
  has_many :contracts
  has_many :projects, through: :contracts

end

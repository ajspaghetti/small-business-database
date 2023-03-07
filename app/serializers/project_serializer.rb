class ProjectSerializer < ActiveModel::Serializer
  attributes :id, :project_name, :project_desc, :project_notes, :address_id, :user_id, :user, :address, :contracts, :subcontractors, :clients, :client_companies

  belongs_to :user  
  belongs_to :address
  has_many :contracts
  has_many :employees, through: :contracts
  has_many :subcontractors, through: :contracts
  has_many :clients, through: :contracts
  has_many :client_companies, through: :contracts

end

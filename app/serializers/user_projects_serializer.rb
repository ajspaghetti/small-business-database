class UserProjectsSerializer < ActiveModel::Serializer
  attributes :id, :username, :first_name, :last_name, :project_name, :project_desc, :notes

  has_many :contracts
  has_many :projects, through: :contracts
end

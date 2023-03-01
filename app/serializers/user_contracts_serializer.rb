class UserContractsSerializer < ActiveModel::Serializer
  attributes :id, :username, :first_name, :last_name, :contract_title, :contract_value, :contract_notes

  has_many :contracts
  has_many :projects, through: :contracts
end

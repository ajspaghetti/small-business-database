class UserContractsSerializer < ActiveModel::Serializer
  attributes :id, :username, :first_name, :last_name, :contract_title, :contract_value

  has_many :contracts
end

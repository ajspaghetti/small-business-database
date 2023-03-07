class UserContractsSerializer < ActiveModel::Serializer
  attributes :id, :username

  has_many :contracts
end

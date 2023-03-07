class UserContractsSerializer < ActiveModel::Serializer
  attributes :id, :email

  has_many :contracts
end

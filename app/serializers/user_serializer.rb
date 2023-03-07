class UserSerializer < ActiveModel::Serializer
  attributes :id, :username

  has_many :contracts
  has_many :projects, through: :contracts
end

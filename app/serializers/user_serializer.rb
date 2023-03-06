class UserSerializer < ActiveModel::Serializer
  attributes :id, :username, :password_digest

  has_many :contracts
  has_many :projects, through: :contracts
end

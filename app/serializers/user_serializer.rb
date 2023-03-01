class UserSerializer < ActiveModel::Serializer
  attributes :id, :username, :password, :first_name, :last_name, :phone, :email

  has_many :contracts
  has_many :projects, through: :contracts
end

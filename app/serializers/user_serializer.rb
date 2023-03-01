class UserSerializer < ActiveModel::Serializer
  attributes :id, :username, :password, :first_name, :last_name, :user_phone, :user_email

  has_many :contracts
  has_many :projects, through: :contracts
end

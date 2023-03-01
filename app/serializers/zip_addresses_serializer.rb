class ZipAddressesSerializer < ActiveModel::Serializer
  attributes :id, :zip_code, :city, :county, :state, :line_one, :line_two

  has_many :addresses
end

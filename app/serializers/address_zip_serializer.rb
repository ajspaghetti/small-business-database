class AddressZipSerializer < ActiveModel::Serializer
  attributes :id, :line_one, :line_two, :zip_code, :city, :state, :county

  has_one :zip
end

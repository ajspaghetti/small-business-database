class AddressSerializer < ActiveModel::Serializer
  attributes :id, :line_one, :line_two, :zip_id

  def total_addresses
    object.addresses.uniq.length
  end

  has_one :zip
end

class EmployeeAddressSerializer < ActiveModel::Serializer
  attributes :id, :first_name, :middle_name, :last_name, :suffix, :line_one, :line_two, :zip_id

  has_one :address
end

class SubcontractorAddressSerializer < ActiveModel::Serializer
  attributes :id, :primary_poc_name, :company_legal_name, :company_dba, :line_one, :line_two, :zip_id

  has_one :address
end

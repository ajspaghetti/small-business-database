class ProjectAddressSerializer < ActiveModel::Serializer
  attributes :id, :project_name, :project_desc, :line_one, :line_two, :zip_id

  has_one :address
end

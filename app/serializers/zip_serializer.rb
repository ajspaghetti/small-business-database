class ZipSerializer < ActiveModel::Serializer
  attributes :id, :zip_code, :latitude, :longitude, :city, :state, :county

  has_many :addresses
end

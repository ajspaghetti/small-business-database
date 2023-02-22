class CreateZipCodes < ActiveRecord::Migration[7.0]
  def change
    create_table :zip_codes do |t|
      t.integer :zip_code
      t.decimal :latitude, precision: 6, scale: 10
      t.decimal :longitude, precision: 6, scale: 10
      t.integer :city_id # has_one city
      t.integer :state_id # has_one state
      t.integer :county_id #has_one county

    end
  end
end

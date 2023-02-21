class CreateZipCodes < ActiveRecord::Migration[7.0]
  def change
    create_table :zip_codes do |t|
      t.integer :zip_number
      t.integer :city_id # has_one city
      t.integer :county_id # has_one county
      t.integer :state_id # has_one state
      t.integer :country # has_one country

    end
  end
end

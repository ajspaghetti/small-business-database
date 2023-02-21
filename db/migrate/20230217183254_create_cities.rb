class CreateCities < ActiveRecord::Migration[7.0]
  def change
    create_table :cities do |t|
      t.string :city_name
      t.integer :county_id # has_one county
      t.integer :state_id # has_one state
      t.integer :country_id # has_one country
    end
  end
end

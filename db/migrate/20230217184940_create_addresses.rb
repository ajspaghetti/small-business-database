class CreateAddresses < ActiveRecord::Migration[7.0]
  def change
    create_table :addresses do |t|
      t.string :current_address
      t.integer :zip_code_id
      t.integer :city_id
      t.integer :county_id
      t.integer :state_id
      t.integer :country_id

    end
  end
end

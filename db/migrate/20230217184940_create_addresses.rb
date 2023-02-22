class CreateAddresses < ActiveRecord::Migration[7.0]
  def change
    create_table :addresses do |t|
      t.string :current_address # address number and street name, unit
      t.string :current_address_line_two # unit or apartment number
      t.integer :zip_code_id
      t.integer :city_id # how to get to auto-populate based on zip?
      t.integer :county_id # how to get to auto-populate based on zip?
      t.integer :state_id # how to get to auto-populate based on zip?
    end
  end
end

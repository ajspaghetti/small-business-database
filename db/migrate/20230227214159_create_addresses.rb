class CreateAddresses < ActiveRecord::Migration[7.0]
  def change
    create_table :addresses do |t|
      t.string :line_one
      t.string :line_two
      t.integer :zip_id
    end
  end
end

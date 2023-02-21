class CreateItins < ActiveRecord::Migration[7.0]
  def change
    create_table :itins do |t|
      t.integer :itin_number
      t.date :itin_valid_since
      t.date :itin_valid_until
    end
  end
end

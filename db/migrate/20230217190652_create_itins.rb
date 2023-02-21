class CreateItins < ActiveRecord::Migration[7.0]
  def change
    create_table :itins do |t|
      t.integer :itin_number
    end
  end
end

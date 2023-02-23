class CreatePhoneNumbers < ActiveRecord::Migration[7.0]
  def change
    create_table :phone_numbers do |t|
      t.string :owner
      t.string :country_code, :default => "+1"
      t.integer :phone # 10 digits if USA... we'll see about foreign number support
      t.boolean :active? # true or false, numbers change all the time
      t.string :notes

      t.timestamps
    end
  end
end

class CreatePhoneNumbers < ActiveRecord::Migration[7.0]
  def change
    create_table :phone_numbers do |t|
      t.string :country_code, :default => "+1"
      t.integer :phone # 10 digits if USA... we'll see about foreign number support
      t.boolean :active? # true or false, numbers change all the time
      t.integer :user_id, :null => false
      t.integer :company_id, :null => false
      t.integer :employee_id, :null => false
      t.integer :client_id, :null => false
      t.integer :hiring_lead_id, :null => false
      t.integer :sales_lead_id, :null => false

      t.timestamps
    end
  end
end

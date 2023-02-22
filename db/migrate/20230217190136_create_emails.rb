class CreateEmails < ActiveRecord::Migration[7.0]
  def change
    create_table :emails do |t|
      t.string :email_address
      # each of the below can be null depending on who the email belongs to
      t.integer :employee_id#, :null => 0
      t.integer :client_id#, :null => 0
      t.integer :company_id#, :null => 0
      t.integer :user_id#, :null => 0
      t.integer :sales_lead_id#, :null => 0
      t.integer :hiring_lead_id#, :null => 0
      t.timestamps
    end
  end
end

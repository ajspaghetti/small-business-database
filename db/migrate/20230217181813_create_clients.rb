class CreateClients < ActiveRecord::Migration[7.0]
  def change
    create_table :clients do |t|
      t.string :first_name, :null => false
      t.string :last_name, :null => 0
      t.integer :job_title_id, :null => false
      t.integer :company_id, :null => false
      t.integer :phone_number_id, :null => false
      t.integer :email_id, :null => 0
    end
  end
end

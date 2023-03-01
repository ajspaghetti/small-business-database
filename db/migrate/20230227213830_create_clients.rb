class CreateClients < ActiveRecord::Migration[7.0]
  def change
    create_table :clients do |t|
      t.string :first_name
      t.string :last_name
      t.string :job_title
      t.string :client_phone
      t.string :client_email
      t.integer :client_company_id
      t.text :client_notes

      t.timestamps
    end
  end
end

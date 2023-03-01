class CreateClients < ActiveRecord::Migration[7.0]
  def change
    create_table :clients do |t|
      t.string :first_name
      t.string :last_name
      t.string :job_title
      t.string :phone
      t.string :email
      t.integer :client_company_id
      t.text :notes

      t.timestamps
    end
  end
end

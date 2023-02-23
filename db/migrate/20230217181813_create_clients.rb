class CreateClients < ActiveRecord::Migration[7.0]
  def change
    create_table :clients do |t|
      t.string :first_name
      t.string :last_name
      t.integer :job_title_id # array
      t.integer :company_id
      t.integer :phone_number_id
      t.integer :email_id
      t.integer :language_id

      t.timestamps
    end
  end
end

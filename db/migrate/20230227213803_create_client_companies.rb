class CreateClientCompanies < ActiveRecord::Migration[7.0]
  def change
    create_table :client_companies do |t|
      t.string :legal_name
      t.string :dba_name
      t.string :industry
      # t.integer :address_id
      t.string :phone
      t.string :email
      t.string :primary_poc_name
      t.string :poc_role
      t.string :poc_phone
      t.string :poc_email
      t.float :annual_revenue
      t.text :notes

      t.timestamps
    end
  end
end

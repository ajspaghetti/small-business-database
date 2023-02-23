class CreateCompanies < ActiveRecord::Migration[7.0]
  def change
    create_table :companies do |t|
      t.string :company_name
      t.string :company_category # subcontractor, client-company, GC, owner, etc...
      t.string :hq_country_code, :default => "+1"
      t.integer :hq_phone_number
      t.string :hq_email
      t.string :hq_address_line_1
      t.string :hq_address_line_2
      t.integer :zip_code_id
      t.integer :address_id # array
      t.integer :email_id # array
      t.integer :phone_number_id # array
      t.integer :skill_id # array
      t.integer :project_id # array
      t.integer :client_id # array
      t.integer :employer_identification_number_id
      
      t.timestamps
    end
  end
end

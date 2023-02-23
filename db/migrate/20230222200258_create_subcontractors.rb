class CreateSubcontractors < ActiveRecord::Migration[7.0]
  def change
    create_table :subcontractors do |t|
      t.string :sub_name
      t.string :main_country_code, :default => "+1"
      t.integer :main_phone_number
      t.string :main_email
      t.integer :company_id # subcontractor company
      t.integer :phone_number_id # array
      t.ingeger :email_id # array
      t.integer :address_id # array
      t.integer :slc_id # slcs, array
      t.integer :employer_identification_number_id
      # EIN image upload(s)
      t.integer :itin
      t.boolean :licensed?
      t.string :license_details
      # license image upload(s)
      t.boolean :insured?
      t.string :insurance_details
      # insurance image upload(s)

      t.timestamps
    end
  end
end

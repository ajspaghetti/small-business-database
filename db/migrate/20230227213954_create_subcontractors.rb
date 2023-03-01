class CreateSubcontractors < ActiveRecord::Migration[7.0]
  def change
    create_table :subcontractors do |t|
      t.string :company_legal_name
      t.string :company_dba
      t.integer :address_id
      t.string :primary_poc_name
      t.string :poc_role
      t.string :poc_phone
      t.string :poc_email
      t.string :sub_tax_number # ein or itin
      t.integer :skill_id
      t.boolean :active?
      t.text :sub_notes

      t.timestamps
    end
  end
end

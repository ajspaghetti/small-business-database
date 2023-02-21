class CreateCompanies < ActiveRecord::Migration[7.0]
  def change
    create_table :companies do |t|
      t.string :company_name
      t.string :company_category # subcontractor, client-company, GC, owner, etc...
      t.integer :city_id
      t.integer :phone_number_id
      t.integer :email_id
      t.integer :client_id # clients at said company
    end
  end
end

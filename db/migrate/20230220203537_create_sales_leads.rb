class CreateSalesLeads < ActiveRecord::Migration[7.0]
  def change
    create_table :sales_leads do |t|
      t.string :contact_name
      t.integer :company_id
      t.integer :phone_number_id
      t.string :type_of_work
      t.float :opportunity_value
      t.boolean :converted_successfully? # true if contracted, false if still in pipeline
      t.boolean :closed? # true if no longer available, false if still in pipeline
    end
  end
end

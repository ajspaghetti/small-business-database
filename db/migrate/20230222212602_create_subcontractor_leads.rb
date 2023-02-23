class CreateSubcontractorLeads < ActiveRecord::Migration[7.0]
  def change
    create_table :subcontractor_leads do |t|
      t.string :potential_sub_name
      t.integer :skill_id
      t.integer :phone_number_id
      t.integer :email_id
      t.boolean :licensed?
      t.boolean :insured?
      t.boolean :still_interested? # true if still interested, false if MIA
      t.text :notes
      
      t.timestamps
    end
  end
end

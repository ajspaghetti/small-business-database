class CreateHiringLeads < ActiveRecord::Migration[7.0]
  def change
    create_table :hiring_leads do |t|
      t.string :potential_hire_name
      t.string :experience_level#, :null => false # junior, middle, senior
      t.integer :phone_number_id#, :null => false # may have several phone numbers, array
      t.integer :email_id#, :null => false
      t.integer :skill_id#, :null => false
      t.boolean :still_interested? # true if still interested, false if MIA
    end
  end
end

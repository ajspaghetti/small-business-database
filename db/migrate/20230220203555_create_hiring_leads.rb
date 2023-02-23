class CreateHiringLeads < ActiveRecord::Migration[7.0]
  def change
    create_table :hiring_leads do |t|
      t.string :potential_hire_name
      t.integer :skill_id # array
      t.string :experience_level # junior, middle, senior
      t.integer :phone_number_id # array
      t.integer :email_id # array
      t.boolean :still_interested? # true if still interested, false if MIA

      t.timestamps
    end
  end
end

class CreateSlcs < ActiveRecord::Migration[7.0]
  def change
    create_table :slcs do |t|
      t.string :first_name
      t.string :last_name
      t.integer :skill_id # array
      t.integer :job_title_id
      t.boolean :government_eligible?
      t.integer :gov_title_id
      t.string :experience_level # junior, middle, senior
      t.integer :phone_number_id # array
      t.integer :email_id # array
      t.float :current_hourly_rate # paid to subcontractor

      t.timestamps
    end
  end
end

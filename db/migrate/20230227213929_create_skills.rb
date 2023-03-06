class CreateSkills < ActiveRecord::Migration[7.0]
  def change
    create_table :skills do |t|
      t.string :skill_name
      t.integer :employee_id
      t.integer :subcontractor_id
    end
  end
end

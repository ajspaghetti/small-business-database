class CreateProjects < ActiveRecord::Migration[7.0]
  def change
    create_table :projects do |t|
      t.string :project_name
      t.string :project_desc
      t.text :project_notes
      t.integer :address_id
      t.integer :user_id

      t.timestamps
    end
  end
end

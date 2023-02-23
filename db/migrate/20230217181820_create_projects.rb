class CreateProjects < ActiveRecord::Migration[7.0]
  def change
    create_table :projects do |t|
      t.string :project_title
      t.boolean :gov?
      t.integer :address_id
      t.integer :zip_code_id
      t.integer :employee_id
      t.integer :user_id
      t.integer :company_id
      t.integer :client_id

      t.timestamps
    end
  end
end

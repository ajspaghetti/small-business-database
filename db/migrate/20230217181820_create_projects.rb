class CreateProjects < ActiveRecord::Migration[7.0]
  def change
    create_table :projects do |t|
      t.string :project_title
      t.boolean :gov? # true or false
      t.integer :address_id #project address?
      t.integer :zip_code_id #project zip-code
      t.integer :employee_id #lead-person assigned to project, other employees currently assigned to project
      t.integer :user_id #lead internalproject-manager
      t.integer :company_id #what company owns this project?
      t.integer :client_id #lead contact(s) at client organization

    end
  end
end

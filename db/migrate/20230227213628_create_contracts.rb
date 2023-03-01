class CreateContracts < ActiveRecord::Migration[7.0]
  def change
    create_table :contracts do |t|
      t.string :contract_title
      t.float :contract_value
      t.text :contract_notes
      t.integer :project_id
      t.integer :client_company_id
      t.integer :client_id
      t.integer :employee_id
      t.integer :subcontractor_id
      t.integer :user_id

      t.timestamps
    end
  end
end

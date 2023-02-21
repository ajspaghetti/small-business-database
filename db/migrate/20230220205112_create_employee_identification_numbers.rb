class CreateEmployeeIdentificationNumbers < ActiveRecord::Migration[7.0]
  def change
    create_table :employee_identification_numbers do |t|
      t.integer :ein_number
    end
  end
end

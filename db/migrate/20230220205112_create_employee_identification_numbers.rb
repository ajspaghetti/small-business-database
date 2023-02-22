class CreateEmployeeIdentificationNumbers < ActiveRecord::Migration[7.0]
  def change
    create_table :employee_identification_numbers do |t|
      t.integer :ein_number
      t.date :ein_valid_since
      t.date :ein_valid_until
    end
  end
end

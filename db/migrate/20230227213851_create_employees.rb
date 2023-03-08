class CreateEmployees < ActiveRecord::Migration[7.0]
  def change
    create_table :employees do |t|
      t.string :first_name
      t.string :middle_name
      t.string :last_name
      t.string :suffix
      t.string :gender
      t.string :emp_phone
      t.string :emp_email
      t.integer :address_id
      t.string :tax_number # social or itin
      t.string :job_title
      t.integer :skill_id
      t.date :start_date
      t.string :hourly_or_salary
      t.float :hourly_rate
      t.float :annual_salary
      t.string :pto_policy
      t.boolean :active
      t.text :emp_notes
      
      t.timestamps
    end
  end
end

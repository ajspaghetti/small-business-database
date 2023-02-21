class CreateEmployees < ActiveRecord::Migration[7.0]
  def change
    create_table :employees do |t|
      # image upload
      t.string :first_name, :null => false
      t.string :middle_name, :default => ""
      t.string :last_name, :null => false
      t.string :suffix, :default => ""
      t.string :gender, :null => false
      t.string :emp_category_id, :null => false # W2, C, S, or SLC
      t.integer :emp_code, :null => false # validates that it's 5 digits long.
      t.integer :phone_number_id, :null => false # needs serializer, nested
      t.boolean :tax_number_onfile?, :null => false # yes/no
      # image upload of tax_number
      t.integer :social_security_number_id, :null => 0
      t.integer :itin_id, :null => 0
      t.date :date_of_birth, :default => 00/00/0000
      t.string :city_of_birth, :null => 0
      t.string :country_of_birth, :null => 0
      t.boolean :id_pic_onfile?, :null => false # yes/no
      # image upload id_pic
      t.string :id_pic_type, :null => false # array of set options, validations
      t.string :id_number, :null => false #alphanumeric
      t.boolean :w_four?, :null => false # yes/no -- can have one or the other or both
      t.boolean :w_nine?, :null => false # yes/no -- can have one or the other or both
      t.integer :job_title_id, :null => false
      t.date :start_date, :null => false
      t.boolean :hourly_or_salary?, :null => false
      t.integer :current_hourly_rate, :null => 0
      t.integer :current_annual_salary, :null => 0
      t.boolean :government_eligible?, :null => false
      t.integer :gov_title_id, :null => 0
      t.integer :current_gov_hourly_rate, :null => 0
      t.integer :current_gov_annual_salary, :null => 0
      t.boolean :insured?, :null => false
      t.string :insurance_details, :null => 0
      # insurance waiver/documentation upload
      t.boolean :active?, :null => false # is this employee currently employed?
      t.date :end_date, :null => false # date last worked with us. Can be switched back on and this would be null when employee is active. Need to find a way to keep a record of time employed vs time not-employed.
      t.text :notes, :null => "<Employee notes/details>"

      t.timestamps
    end
  end
end

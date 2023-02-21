class CreateEmployees < ActiveRecord::Migration[7.0]
  def change
    create_table :employees do |t|
      # image upload
      t.string :first_name, :null => false
      t.string :middle_name, :default => ""
      t.string :last_name, :null => false
      t.string :suffix, :default => ""
      t.string :gender, :null => false
      t.integer :emp_category_id, :null => false # W2, C, S, or SLC
      t.integer :emp_id_code, :null => false # validates that it's 5 digits long.
      t.integer :phone_number_id, :null => false # needs serializer, nested
      t.integer :address_id
      t.integer :zip_code_id
      t.integer :city_id
      t.integer :county_id
      t.integer :state_id
      t.integer :country_id, :default => 1 # United States
      t.boolean :tax_number_onfile?, :null => false # yes/no
      # image upload of tax_number
      t.integer :social_security_number_id, :default => 0
      t.integer :itin_id, :default => 0
      t.date :date_of_birth, :default => Date.today
      t.string :city_of_birth, :default => ""
      t.string :country_of_birth, :default => ""
      t.boolean :id_pic_onfile?, :null => false # yes/no
      # image upload id_pic
      t.string :id_pic_type, :null => false # array of set options, validations
      t.string :id_number, :default => 0 #alphanumeric
      t.boolean :w_four?, :null => false # yes/no -- can have one or the other or both
      t.boolean :w_nine?, :null => false # yes/no -- can have one or the other or both
      t.integer :job_title_id, :null => false
      t.date :start_date, :default => Date.today
      t.boolean :hourly_or_salary?, :null => false
      t.integer :current_hourly_rate, :default => 0
      t.integer :current_annual_salary, :default => 0
      t.boolean :government_eligible?, :null => false
      t.integer :gov_title_id, :default => ""
      t.integer :current_gov_hourly_rate, :default => 0
      t.integer :current_gov_annual_salary, :default => 0
      t.boolean :insured?, :null => false
      t.string :insurance_details, :default => ""
      # insurance waiver/documentation upload
      t.boolean :active?, :null => false # is this employee currently employed?
      # t.date :end_date, :default => 0 # date last worked with us. Can be switched back on and this would be null when employee is active. Need to find a way to keep a record of time employed vs time not-employed. Need to figure out logic for this
      t.text :notes, :null => "<Employee notes/details>"

      t.timestamps
    end
  end
end


## scope:
# :emp_category_id
# :phone_number_id
# :address_id
# :zip_code_id
# :city_id
# :county_id
# :state_id
# :country_id
# :social_security_number_id
# :itin_id
# :job_title_id
# :gov_title_id
class CreateEmployees < ActiveRecord::Migration[7.0]
  def change
    create_table :employees do |t|
      # image upload
      t.string :first_name
      t.string :middle_name
      t.string :last_name
      t.string :suffix
      t.string :gender
      t.integer :emp_category_id
      t.integer :emp_id_code
      t.integer :phone_number_id
      t.integer :address_id
      t.integer :zip_code_id
      t.boolean :tax_number_onfile?
      # image upload of tax_number
      t.integer :social_security_number_id
      t.integer :itin_id
      t.date :date_of_birth, :default => Date.today
      t.string :city_of_birth
      t.string :country_of_birth
      t.boolean :id_pic_onfile?
      # image upload id_pic
      t.string :id_pic_type
      t.string :id_number
      t.boolean :w_four?
      t.boolean :w_nine?
      t.integer :skill_id # array
      t.integer :job_title_id # array
      t.date :start_date, :default => Date.today
      t.string :hourly_or_salary
      t.float :current_hourly_rate
      t.float :current_annual_salary
      t.boolean :government_eligible?
      t.integer :gov_title_id
      t.float :current_gov_hourly_rate
      t.float :current_gov_annual_salary
      t.boolean :insured?
      t.string :insurance_details
      # insurance waiver/documentation upload
      t.boolean :active?
      # t.date :end_date, :default => 0 # date last worked with us. Can be switched back on and this would be null when employee is active. Need to find a way to keep a record of time employed vs time not-employed. Need to figure out logic for this
      t.text :notes

      t.timestamps
    end
  end
end


## scope:
# :emp_category_id
# :phone_number_id
# :address_id
# :zip_code_id
# :social_security_number_id
# :itin_id
# :job_title_id
# :gov_title_id
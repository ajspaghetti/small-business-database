# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `bin/rails
# db:schema:load`. When creating a new database, `bin/rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema[7.0].define(version: 2023_02_20_205904) do
  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "access_levels", force: :cascade do |t|
    t.string "access_type"
  end

  create_table "addresses", force: :cascade do |t|
    t.string "current_address"
    t.string "current_address_line_two"
    t.integer "zip_code_id"
  end

  create_table "clients", force: :cascade do |t|
    t.string "first_name"
    t.string "last_name"
    t.integer "job_title_id"
    t.integer "company_id"
    t.integer "phone_number_id"
    t.integer "email_id"
  end

  create_table "companies", force: :cascade do |t|
    t.string "company_name"
    t.string "company_category"
    t.integer "city_id"
    t.integer "phone_number_id"
    t.integer "email_id"
    t.integer "client_id"
  end

  create_table "emails", force: :cascade do |t|
    t.string "email_address"
    t.integer "employee_id"
    t.integer "client_id"
    t.integer "company_id"
    t.integer "user_id"
    t.integer "sales_lead_id"
    t.integer "hiring_lead_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "emp_categories", force: :cascade do |t|
    t.string "category_title"
    t.string "category_abbreviation"
  end

  create_table "employee_identification_numbers", force: :cascade do |t|
    t.integer "ein_number"
    t.date "ein_valid_since"
    t.date "ein_valid_until"
  end

  create_table "employees", force: :cascade do |t|
    t.string "first_name"
    t.string "middle_name"
    t.string "last_name"
    t.string "suffix"
    t.string "gender"
    t.integer "emp_category_id"
    t.integer "emp_id_code"
    t.integer "phone_number_id"
    t.integer "address_id"
    t.integer "zip_code_id"
    t.boolean "tax_number_onfile?"
    t.integer "social_security_number_id"
    t.integer "itin_id"
    t.date "date_of_birth"
    t.string "city_of_birth"
    t.string "country_of_birth"
    t.boolean "id_pic_onfile?"
    t.string "id_pic_type"
    t.string "id_number"
    t.boolean "w_four?"
    t.boolean "w_nine?"
    t.integer "job_title_id"
    t.date "start_date"
    t.boolean "hourly_or_salary?"
    t.integer "current_hourly_rate"
    t.integer "current_annual_salary"
    t.boolean "government_eligible?"
    t.integer "gov_title_id"
    t.integer "current_gov_hourly_rate"
    t.integer "current_gov_annual_salary"
    t.boolean "insured?"
    t.string "insurance_details"
    t.boolean "active?"
    t.text "notes"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "gov_titles", force: :cascade do |t|
    t.string "gov_job_title"
  end

  create_table "hiring_leads", force: :cascade do |t|
    t.string "potential_hire_name"
    t.string "experience_level"
    t.integer "phone_number_id"
    t.integer "email_id"
    t.integer "skill_id"
    t.boolean "still_interested?"
  end

  create_table "itins", force: :cascade do |t|
    t.integer "itin_number"
    t.date "itin_valid_since"
    t.date "itin_valid_until"
  end

  create_table "job_titles", force: :cascade do |t|
    t.string "job_title"
  end

  create_table "languages", force: :cascade do |t|
    t.string "language_name"
  end

  create_table "phone_numbers", force: :cascade do |t|
    t.string "country_code", default: "+1"
    t.integer "phone"
    t.boolean "active?"
    t.integer "user_id", null: false
    t.integer "company_id", null: false
    t.integer "employee_id", null: false
    t.integer "client_id", null: false
    t.integer "hiring_lead_id", null: false
    t.integer "sales_lead_id", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "projects", force: :cascade do |t|
    t.string "project_title"
    t.boolean "gov?"
    t.integer "address_id"
    t.integer "zip_code_id"
    t.integer "employee_id"
    t.integer "user_id"
    t.integer "company_id"
    t.integer "client_id"
  end

  create_table "sales_leads", force: :cascade do |t|
    t.string "contact_name"
    t.integer "company_id"
    t.integer "phone_number_id"
    t.string "type_of_work"
    t.string "opportunity_value"
    t.boolean "converted_successfully?"
    t.boolean "closed?"
  end

  create_table "skills", force: :cascade do |t|
    t.string "skill_title"
  end

  create_table "social_security_numbers", force: :cascade do |t|
    t.integer "ssn_number"
    t.date "ssn_valid_since"
    t.date "ssn_valid_until"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "users", force: :cascade do |t|
    t.string "username"
    t.string "password"
    t.string "email_id"
    t.integer "access_level_id"
  end

  create_table "zip_codes", force: :cascade do |t|
    t.integer "zip_code"
    t.decimal "latitude"
    t.decimal "longitude"
    t.integer "city"
    t.integer "state"
    t.integer "county"
  end

end

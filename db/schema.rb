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

ActiveRecord::Schema[7.0].define(version: 2023_02_27_214159) do
  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "addresses", force: :cascade do |t|
    t.string "line_one"
    t.string "line_two"
    t.integer "zip_id"
  end

  create_table "client_companies", force: :cascade do |t|
    t.string "legal_name"
    t.string "dba_name"
    t.string "industry"
    t.integer "address_id"
    t.string "co_phone"
    t.string "co_email"
    t.string "primary_poc_name"
    t.string "poc_role"
    t.string "poc_phone"
    t.string "poc_email"
    t.float "annual_revenue"
    t.text "cc_notes"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "clients", force: :cascade do |t|
    t.string "first_name"
    t.string "last_name"
    t.string "job_title"
    t.string "client_phone"
    t.string "client_email"
    t.integer "client_company_id"
    t.text "client_notes"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "contracts", force: :cascade do |t|
    t.string "contract_title"
    t.float "contract_value"
    t.text "contract_notes"
    t.integer "project_id"
    t.integer "client_company_id"
    t.integer "client_id"
    t.integer "employee_id"
    t.integer "subcontractor_id"
    t.integer "user_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "employees", force: :cascade do |t|
    t.string "first_name"
    t.string "middle_name"
    t.string "last_name"
    t.string "suffix"
    t.string "gender"
    t.string "emp_phone"
    t.string "emp_email"
    t.integer "address_id"
    t.string "tax_number"
    t.string "job_title"
    t.integer "skill_id"
    t.date "start_date"
    t.string "hourly_or_salary"
    t.float "hourly_rate"
    t.float "annual_salary"
    t.string "pto_policy"
    t.boolean "active?"
    t.text "emp_notes"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "projects", force: :cascade do |t|
    t.string "project_name"
    t.string "project_desc"
    t.text "project_notes"
    t.integer "address_id"
    t.integer "user_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "skills", force: :cascade do |t|
    t.string "skill_name"
    t.integer "employee_id"
    t.integer "subcontractor_id"
  end

  create_table "subcontractors", force: :cascade do |t|
    t.string "company_legal_name"
    t.string "company_dba"
    t.integer "address_id"
    t.string "primary_poc_name"
    t.string "poc_role"
    t.string "poc_phone"
    t.string "poc_email"
    t.string "sub_tax_number"
    t.integer "skill_id"
    t.boolean "active?"
    t.text "sub_notes"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "users", force: :cascade do |t|
    t.string "username"
    t.string "password"
  end

  create_table "zips", force: :cascade do |t|
    t.integer "zip_code"
    t.decimal "latitude"
    t.decimal "longitude"
    t.string "city"
    t.string "state"
    t.string "county"
  end

end

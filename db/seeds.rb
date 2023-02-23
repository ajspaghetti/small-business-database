require 'csv'

csv_text = File.read(Rails.root.join('lib', 'seeds', 'zip_codes.csv'))
csv = CSV.parse(csv_text, :headers => true, :encoding => 'ISO-8859-1')
csv.each do |row|
    t = Transaction.new
    t.zip_code = row['zip_code']
    t.latitude = row['latitude']
    t.longitude = row['longitude']
    t.city = row['city']
    t.state = row['state']
    t.county = row['county']
    t.save
    puts "#{t.zip_code}, #{t.city}, #{t.county}, #{t.state} saved"
end

puts "There are now #{Transaction.count} rows in the transactions table"

#u
puts "Seeding users..."
    u1 = User.create(
        username: "alexjpsagnoli",
        password: "password",
        email_id: m1.id,
        access_level_id: a1.id
    )
    u2 = User.create(
        username: "admin",
        password: "password",
        email_id: m6.id,
        access_level_id: a1.id
    )
    u3 = User.create(
        username: "manager",
        password: "password",
        email_id: m7.id,
        access_level_id: a2.id
    )
    u4 = User.create(
        username: "viewer",
        password: "password",
        email_id: m8.id,
        access_level_id: a3.id
    )

#e
puts "Seeding employees..."
    e1 = Employee.create(
        first_name: "",
        middle_name: "",
        last_name: "",
        suffix: "",
        gender: "",
        emp_category_id: ,
        emp_id_code: ,
        phone_number_id: ,
        address_id: ,
        zip_code_id: ,
        tax_number_onfile: ,
        social_security_number_id: ,
        itin_id: ,
        date_of_birth: ,
        city_of_birth: "",
        country_of_birth: "",
        id_pic_onfile?: false,
        id_pic_type: "",
        id_number: "",
        w_four?: false,
        w_nine?: true,
        skill_id: ,
        job_title_id: ,
        start_date: ,
        hourly_or_salary?: "",
        current_hourly_rate: 45.67,
        current_annual_salary: 0,
        government_eligible?: true,
        gov_title_id: ,
        current_gov_hourly_rate: 65.33,
        current_gov_annual_salary: 0,
        insured?: true,
        insurance_details: "",
        active?: true,
        notes: "sample seed data"
    )
    e2 = Employee.create(
        first_name: "",
        middle_name: "",
        last_name: "",
        suffix: "",
        gender: "",
        emp_category_id: ,
        emp_id_code: ,
        phone_number_id: ,
        address_id: ,
        zip_code_id: ,
        tax_number_onfile: ,
        social_security_number_id: ,
        itin_id: ,
        date_of_birth: ,
        city_of_birth: "",
        country_of_birth: "",
        id_pic_onfile?: false,
        id_pic_type: "",
        id_number: "",
        w_four?: false,
        w_nine?: true,
        skill_id: ,
        job_title_id: ,
        start_date: ,
        hourly_or_salary?: "",
        current_hourly_rate: 45.67,
        current_annual_salary: 0,
        government_eligible?: true,
        gov_title_id: ,
        current_gov_hourly_rate: 65.33,
        current_gov_annual_salary: 0,
        insured?: true,
        insurance_details: "",
        active?: true,
        notes: "sample seed data"
    )
    e3 = Employee.create(
        first_name: "",
        middle_name: "",
        last_name: "",
        suffix: "",
        gender: "",
        emp_category_id: ,
        emp_id_code: ,
        phone_number_id: ,
        address_id: ,
        zip_code_id: ,
        tax_number_onfile: ,
        social_security_number_id: ,
        itin_id: ,
        date_of_birth: ,
        city_of_birth: "",
        country_of_birth: "",
        id_pic_onfile?: false,
        id_pic_type: "",
        id_number: "",
        w_four?: false,
        w_nine?: true,
        skill_id: ,
        job_title_id: ,
        start_date: ,
        hourly_or_salary?: "",
        current_hourly_rate: 45.67,
        current_annual_salary: 0,
        government_eligible?: true,
        gov_title_id: ,
        current_gov_hourly_rate: 65.33,
        current_gov_annual_salary: 0,
        insured?: true,
        insurance_details: "",
        active?: true,
        notes: "sample seed data"
    )
    e4 = Employee.create(
        first_name: "",
        middle_name: "",
        last_name: "",
        suffix: "",
        gender: "",
        emp_category_id: ,
        emp_id_code: ,
        phone_number_id: ,
        address_id: ,
        zip_code_id: ,
        tax_number_onfile: ,
        social_security_number_id: ,
        itin_id: ,
        date_of_birth: ,
        city_of_birth: "",
        country_of_birth: "",
        id_pic_onfile?: false,
        id_pic_type: "",
        id_number: "",
        w_four?: false,
        w_nine?: true,
        skill_id: ,
        job_title_id: ,
        start_date: ,
        hourly_or_salary?: "",
        current_hourly_rate: 45.67,
        current_annual_salary: 0,
        government_eligible?: true,
        gov_title_id: ,
        current_gov_hourly_rate: 65.33,
        current_gov_annual_salary: 0,
        insured?: true,
        insurance_details: "",
        active?: true,
        notes: "sample seed data"
    )
    e5 = Employee.create(
        first_name: "",
        middle_name: "",
        last_name: "",
        suffix: "",
        gender: "",
        emp_category_id: ,
        emp_id_code: ,
        phone_number_id: ,
        address_id: ,
        zip_code_id: ,
        tax_number_onfile: ,
        social_security_number_id: ,
        itin_id: ,
        date_of_birth: ,
        city_of_birth: "",
        country_of_birth: "",
        id_pic_onfile?: false,
        id_pic_type: "",
        id_number: "",
        w_four?: false,
        w_nine?: true,
        skill_id: ,
        job_title_id: ,
        start_date: ,
        hourly_or_salary?: "",
        current_hourly_rate: 45.67,
        current_annual_salary: 0,
        government_eligible?: true,
        gov_title_id: ,
        current_gov_hourly_rate: 65.33,
        current_gov_annual_salary: 0,
        insured?: true,
        insurance_details: "",
        active?: true,
        notes: "sample seed data"
    )
    e6 = Employee.create(
        first_name: "",
        middle_name: "",
        last_name: "",
        suffix: "",
        gender: "",
        emp_category_id: ,
        emp_id_code: ,
        phone_number_id: ,
        address_id: ,
        zip_code_id: ,
        tax_number_onfile: ,
        social_security_number_id: ,
        itin_id: ,
        date_of_birth: ,
        city_of_birth: "",
        country_of_birth: "",
        id_pic_onfile?: false,
        id_pic_type: "",
        id_number: "",
        w_four?: false,
        w_nine?: true,
        skill_id: ,
        job_title_id: ,
        start_date: ,
        hourly_or_salary?: "",
        current_hourly_rate: 45.67,
        current_annual_salary: 0,
        government_eligible?: true,
        gov_title_id: ,
        current_gov_hourly_rate: 65.33,
        current_gov_annual_salary: 0,
        insured?: true,
        insurance_details: "",
        active?: true,
        notes: "sample seed data"
    )
    e7 = Employee.create(
        first_name: "",
        middle_name: "",
        last_name: "",
        suffix: "",
        gender: "",
        emp_category_id: ,
        emp_id_code: ,
        phone_number_id: ,
        address_id: ,
        zip_code_id: ,
        tax_number_onfile: ,
        social_security_number_id: ,
        itin_id: ,
        date_of_birth: ,
        city_of_birth: "",
        country_of_birth: "",
        id_pic_onfile?: false,
        id_pic_type: "",
        id_number: "",
        w_four?: false,
        w_nine?: true,
        skill_id: ,
        job_title_id: ,
        start_date: ,
        hourly_or_salary?: "",
        current_hourly_rate: 45.67,
        current_annual_salary: 0,
        government_eligible?: true,
        gov_title_id: ,
        current_gov_hourly_rate: 65.33,
        current_gov_annual_salary: 0,
        insured?: true,
        insurance_details: "",
        active?: true,
        notes: "sample seed data"
    )
    e8 = Employee.create(
        first_name: "",
        middle_name: "",
        last_name: "",
        suffix: "",
        gender: "",
        emp_category_id: ,
        emp_id_code: ,
        phone_number_id: ,
        address_id: ,
        zip_code_id: ,
        tax_number_onfile: ,
        social_security_number_id: ,
        itin_id: ,
        date_of_birth: ,
        city_of_birth: "",
        country_of_birth: "",
        id_pic_onfile?: false,
        id_pic_type: "",
        id_number: "",
        w_four?: false,
        w_nine?: true,
        skill_id: ,
        job_title_id: ,
        start_date: ,
        hourly_or_salary?: "",
        current_hourly_rate: 45.67,
        current_annual_salary: 0,
        government_eligible?: true,
        gov_title_id: ,
        current_gov_hourly_rate: 65.33,
        current_gov_annual_salary: 0,
        insured?: true,
        insurance_details: "",
        active?: true,
        notes: "sample seed data"
    )
    e9 = Employee.create(
        first_name: "",
        middle_name: "",
        last_name: "",
        suffix: "",
        gender: "",
        emp_category_id: ,
        emp_id_code: ,
        phone_number_id: ,
        address_id: ,
        zip_code_id: ,
        tax_number_onfile: ,
        social_security_number_id: ,
        itin_id: ,
        date_of_birth: ,
        city_of_birth: "",
        country_of_birth: "",
        id_pic_onfile?: false,
        id_pic_type: "",
        id_number: "",
        w_four?: false,
        w_nine?: true,
        skill_id: ,
        job_title_id: ,
        start_date: ,
        hourly_or_salary?: "",
        current_hourly_rate: 45.67,
        current_annual_salary: 0,
        government_eligible?: true,
        gov_title_id: ,
        current_gov_hourly_rate: 65.33,
        current_gov_annual_salary: 0,
        insured?: true,
        insurance_details: "",
        active?: true,
        notes: "sample seed data"
    )
    e10 = Employee.create(
        first_name: "",
        middle_name: "",
        last_name: "",
        suffix: "",
        gender: "",
        emp_category_id: ,
        emp_id_code: ,
        phone_number_id: ,
        address_id: ,
        zip_code_id: ,
        tax_number_onfile: ,
        social_security_number_id: ,
        itin_id: ,
        date_of_birth: ,
        city_of_birth: "",
        country_of_birth: "",
        id_pic_onfile?: false,
        id_pic_type: "",
        id_number: "",
        w_four?: false,
        w_nine?: true,
        skill_id: ,
        job_title_id: ,
        start_date: ,
        hourly_or_salary?: "",
        current_hourly_rate: 45.67,
        current_annual_salary: 0,
        government_eligible?: true,
        gov_title_id: ,
        current_gov_hourly_rate: 65.33,
        current_gov_annual_salary: 0,
        insured?: true,
        insurance_details: "",
        active?: true,
        notes: "sample seed data"
    )
    e11 = Employee.create(
        first_name: "",
        middle_name: "",
        last_name: "",
        suffix: "",
        gender: "",
        emp_category_id: ,
        emp_id_code: ,
        phone_number_id: ,
        address_id: ,
        zip_code_id: ,
        tax_number_onfile: ,
        social_security_number_id: ,
        itin_id: ,
        date_of_birth: ,
        city_of_birth: "",
        country_of_birth: "",
        id_pic_onfile?: false,
        id_pic_type: "",
        id_number: "",
        w_four?: false,
        w_nine?: true,
        skill_id: ,
        job_title_id: ,
        start_date: ,
        hourly_or_salary?: "",
        current_hourly_rate: 45.67,
        current_annual_salary: 0,
        government_eligible?: true,
        gov_title_id: ,
        current_gov_hourly_rate: 65.33,
        current_gov_annual_salary: 0,
        insured?: true,
        insurance_details: "",
        active?: true,
        notes: "sample seed data"
    )
    e12 = Employee.create(
        first_name: "",
        middle_name: "",
        last_name: "",
        suffix: "",
        gender: "",
        emp_category_id: ,
        emp_id_code: ,
        phone_number_id: ,
        address_id: ,
        zip_code_id: ,
        tax_number_onfile: ,
        social_security_number_id: ,
        itin_id: ,
        date_of_birth: ,
        city_of_birth: "",
        country_of_birth: "",
        id_pic_onfile?: false,
        id_pic_type: "",
        id_number: "",
        w_four?: false,
        w_nine?: true,
        skill_id: ,
        job_title_id: ,
        start_date: ,
        hourly_or_salary?: "",
        current_hourly_rate: 45.67,
        current_annual_salary: 0,
        government_eligible?: true,
        gov_title_id: ,
        current_gov_hourly_rate: 65.33,
        current_gov_annual_salary: 0,
        insured?: true,
        insurance_details: "",
        active?: true,
        notes: "sample seed data"
    )

#c
puts "Seeding clients..."
    c1 = Client.create(
        first_name: "",
        last_name: "",
        job_title_id: ,
        company_id: ,
        phone_number_id: ,
        email_id: ,
        language_id: 
    )
    c2 = Client.create(
        first_name: "",
        last_name: "",
        job_title_id: ,
        company_id: ,
        phone_number_id: ,
        email_id: ,
        language_id: 
    )
    c3 = Client.create(
        first_name: "",
        last_name: "",
        job_title_id: ,
        company_id: ,
        phone_number_id: ,
        email_id: ,
        language_id: 
    )
    c4 = Client.create(
        first_name: "",
        last_name: "",
        job_title_id: ,
        company_id: ,
        phone_number_id: ,
        email_id: ,
        language_id: 
    )
    c5 = Client.create(
        first_name: "",
        last_name: "",
        job_title_id: ,
        company_id: ,
        phone_number_id: ,
        email_id: ,
        language_id: 
    )
    c6 = Client.create(
        first_name: "",
        last_name: "",
        job_title_id: ,
        company_id: ,
        phone_number_id: ,
        email_id: ,
        language_id: 
    )
    c7 = Client.create(
        first_name: "",
        last_name: "",
        job_title_id: ,
        company_id: ,
        phone_number_id: ,
        email_id: ,
        language_id: 
    )
    c8 = Client.create(
        first_name: "",
        last_name: "",
        job_title_id: ,
        company_id: ,
        phone_number_id: ,
        email_id: ,
        language_id: 
    )
    c9 = Client.create(
        first_name: "",
        last_name: "",
        job_title_id: ,
        company_id: ,
        phone_number_id: ,
        email_id: ,
        language_id: 
    )
    c10 = Client.create(
        first_name: "",
        last_name: "",
        job_title_id: ,
        company_id: ,
        phone_number_id: ,
        email_id: ,
        language_id: 
    )
    c11 = Client.create(
        first_name: "",
        last_name: "",
        job_title_id: ,
        company_id: ,
        phone_number_id: ,
        email_id: ,
        language_id: 
    )
    c12 = Client.create(
        first_name: "",
        last_name: "",
        job_title_id: ,
        company_id: ,
        phone_number_id: ,
        email_id: ,
        language_id: 
    )
    c13 = Client.create(
        first_name: "",
        last_name: "",
        job_title_id: ,
        company_id: ,
        phone_number_id: ,
        email_id: ,
        language_id: 
    )
    c14 = Client.create(
        first_name: "",
        last_name: "",
        job_title_id: ,
        company_id: ,
        phone_number_id: ,
        email_id: ,
        language_id: 
    )
    c15 = Client.create(
        first_name: "",
        last_name: "",
        job_title_id: ,
        company_id: ,
        phone_number_id: ,
        email_id: ,
        language_id: 
    )
    c16 = Client.create(
        first_name: "",
        last_name: "",
        job_title_id: ,
        company_id: ,
        phone_number_id: ,
        email_id: ,
        language_id: 
    )
    c17 = Client.create(
        first_name: "",
        last_name: "",
        job_title_id: ,
        company_id: ,
        phone_number_id: ,
        email_id: ,
        language_id: 
    )
    c18 = Client.create(
        first_name: "",
        last_name: "",
        job_title_id: ,
        company_id: ,
        phone_number_id: ,
        email_id: ,
        language_id: 
    )

#p
puts "Seeding projects..."
    p1 = Project.create(
        project_title: "",
        gov?: false,
        address_id: ,
        zip_code_id: ,
        employee_id: ,
        user_id: ,
        company_id: ,
        client_id:
    )
    p2 = Project.create(
        project_title: "",
        gov?: false,
        address_id: ,
        zip_code_id: ,
        employee_id: ,
        user_id: ,
        company_id: ,
        client_id:
    )
    p3 = Project.create(
        project_title: "",
        gov?: false,
        address_id: ,
        zip_code_id: ,
        employee_id: ,
        user_id: ,
        company_id: ,
        client_id:
    )
    p4 = Project.create(
        project_title: "",
        gov?: false,
        address_id: ,
        zip_code_id: ,
        employee_id: ,
        user_id: ,
        company_id: ,
        client_id:
    )
    p5 = Project.create(
        project_title: "",
        gov?: false,
        address_id: ,
        zip_code_id: ,
        employee_id: ,
        user_id: ,
        company_id: ,
        client_id:
    )
    p6 = Project.create(
        project_title: "",
        gov?: false,
        address_id: ,
        zip_code_id: ,
        employee_id: ,
        user_id: ,
        company_id: ,
        client_id:
    )
    p7 = Project.create(
        project_title: "",
        gov?: false,
        address_id: ,
        zip_code_id: ,
        employee_id: ,
        user_id: ,
        company_id: ,
        client_id:
    )
    p8 = Project.create(
        project_title: "",
        gov?: false,
        address_id: ,
        zip_code_id: ,
        employee_id: ,
        user_id: ,
        company_id: ,
        client_id:
    )

#k
puts "Seeding companies..."
    k1 = Company.create(
        company_name: "",
        company_category: "",
        hq_country_code: "+1",
        hq_phone_number: 7035556781,
        hq_email: "example1@company.com"
        zip_code_id: ,
        address_id: ,
        email_id: ,
        phone_number_id: ,
        skill_id: ,
        project_id: ,
        client_id: ,
        employer_identification_number_id: 
    )
    k2 = Company.create(
        company_name: "",
        company_category: "",
        hq_country_code: "+1",
        hq_phone_number: 7035556782,
        hq_email: "example2@company.com"
        zip_code_id: ,
        address_id: ,
        email_id: ,
        phone_number_id: ,
        skill_id: ,
        project_id: ,
        client_id: ,
        employer_identification_number_id: 
    )
    k3 = Company.create(
        company_name: "",
        company_category: "",
        hq_country_code: "+1",
        hq_phone_number: 7035556783,
        hq_email: "example3@company.com"
        zip_code_id: ,
        address_id: ,
        email_id: ,
        phone_number_id: ,
        skill_id: ,
        project_id: ,
        client_id: ,
        employer_identification_number_id: 
    )
    k4 = Company.create(
        company_name: "",
        company_category: "",
        hq_country_code: "+1",
        hq_phone_number: 7035556784,
        hq_email: "example4@company.com"
        zip_code_id: ,
        address_id: ,
        email_id: ,
        phone_number_id: ,
        skill_id: ,
        project_id: ,
        client_id: ,
        employer_identification_number_id: 
    )

#j
puts "Seeding job_titles..."
    j1 = Job_title.create(
        
    )

#s
puts "Seeding skills..."
    s1 = Skill.create(

    )

#g
puts "Seeding gov_titles..."
    g1 = Gov_title.create(

    )

#d
puts "Seeding addresses..."
    d1 = Address.create(

    )

#t
puts "Seeding phone_numbers..."
    t1 = Phone_number.create(

    )

#m
puts "Seeding emails..."
    m1 = Email.create(
        owner: "Alex Spagnoli",
        email_address: "alexjspagnoli@gmail.com",
        notes: "..."
    )
    m2 = Email.create(
        owner: "Example Client or Company",
        email_address: "example@clientcompany.com",
        notes: "..."
    )
    m3 = Email.create(
        owner: "Example Employee",
        email_address: "example@employee.com",
        notes: "..."
    )
    m4 = Email.create(
        owner: "Example Hiring Lead",
        email_address: "example@hiringlead.com",
        notes: "..."
    )
    m5 = Email.create(
        owner: "Example Sales Lead",
        email_address: "example@saleslead.com",
        notes: "..."
    )
    m6 = Email.create(
        owner: "Example Admin",
        email_address: "example@admin.com",
        notes: "..."
    )
    m7 = Email.create(
        owner: "Example Manager",
        email_address: "example@manager.com",
        notes: "..."
    )
    m8 = Email.create(
        owner: "Example Viewer",
        email_address: "example@viewer.com",
        notes: "..."
    )

#w
puts "Seeding emp_categories..."
    w1 = Emp_category.create(
        category_title: "W2 Employee, Hourly, Part-Time",
        category_abbreviation: "W2-PT"
    )
    w2 = Emp_category.create(
        category_title: "W2 Employee, Hourly, Full-Time",
        category_abbreviation: "W2-FT"
    )
    w3 = Emp_category.create(
        category_title: "W2 Employee, Salaried",
        category_abbreviation: "W2-S"
    )
    w4 = Emp_category.create(
        category_title: "Contracted Worker, Hourly",
        category_abbreviation: "C-H"
    )
    w5 = Emp_category.create(
        category_title: "Contracted Worker, Piece-work",
        category_abbreviation: "C-PW"
    )
    w6 = Emp_category.create(
        category_title: "Subcontractor",
        category_abbreviation: "SUB"
    )
    w7 = Emp_category.create(
        category_title: "Subcontractor Loaned Worker",
        category_abbreviation: "SLC"
    )

#x
puts "Seeding social_security_numbers..."
    x1 = Social_security_number.create(

    )

#i
puts "Seeding itins..."
    i1 = Itin.create(

    )

#l
puts "Seeding access_levels..."
    l1 = Access_level.create(
        access_type: admin
    )
    l2 = Access_level.create(
        access_type: manager
    )
    l3 = Access_level.create(
        access_type: viewer
    )

#n
puts "Seeding sales_leads..."
    n1 = Sales_lead.create(

    )

#h
puts "Seeding hiring_leads..."
    h1 = Hiring_lead.create(

    )

#f
puts "Seeding employer_identification_numbers..."
    f1 = Employer_identication_number.create(

    )

#v
puts "Seeding languages..."
    v1 = Language.create(
        language_name: "English"
    )
    v2 = Language.create(
        language_name: "Spanish"
    )
    v3 = Language.create(
        language_name: "French"
    )
    v4 = Language.create(
        language_name: "Portuguese"
    )
    v5 = Language.create(
        language_name: "Mandarin (Chinese)"
    )
    v6 = Language.create(
        language_name: "Arabic"
    )
    v7 = Language.create(
        language_name: "Russian"
    )
    v8 = Language.create(
        language_name: "German"
    )
    v9 = Language.create(
        language_name: "Hindi"
    )
    v10 = Language.create(
        language_name: "Japanese"
    )
    v11 = Language.create(
        language_name: "Dutch"
    )
    v12 = Language.create(
        language_name: "Italian"
    )
    v13 = Language.create(
        language_name: "Korean"
    )
    v14 = Language.create(
        language_name: "Polish"
    )
    v15 = Language.create(
        language_name: "Swedish"
    )
    v16 = Language.create(
        language_name: "Amharic"
    )
    v17 = Language.create(
        language_name: "Ukrainian"
    )
    v18 = Language.create(
        language_name: "Tagalog"
    )
    v19 = Language.create(
        language_name: "Vietnamese"
    )
    v20 = Language.create(
        language_name: "Greek"
    )
    v21 = Language.create(
        language_name: "Bengali"
    )
    v22 = Language.create(
        language_name: "Indonesian"
    )
    v23 = Language.create(
        language_name: "Urdu"
    )
    v24 = Language.create(
        language_name: "Turkish"
    )
    v25 = Language.create(
        language_name: "Farsi"
    )

puts "Done seeding!"

#a -
#b -
#c - Client
#d - Address
#e - Employee
#f - Employer_identification_number
#g - Gov_title
#h - Hiring_lead
#i - Itin
#j - Job_title
#k - Company
#l - Access_level
#m - Email
#n - Sales_lead
#o -
#p - Project
#q -
#r -
#s - Skill
#t - Phone_number
#u - User
#v -
#w - Emp_category
#x - Social_security_number
#y - 
#z - Zip_code
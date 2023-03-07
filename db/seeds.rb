require 'csv'

csv_text = File.read(Rails.root.join('lib', 'seeds', 'zip_codes.csv'))
csv = CSV.parse(csv_text, :headers => true)
csv.each do |row|
    t = Zip.create!
    t.zip_code = row['zip_code']
    t.latitude = row['latitude']
    t.longitude = row['longitude']
    t.city = row['city']
    t.state = row['state']
    t.county = row['county']
    t.save
    puts "#{t.zip_code}, #{t.latitude}, #{t.longitude}, #{t.city}, #{t.county}, #{t.state} saved"
end

puts "There are now #{Zip.count} rows in the transactions table"
puts "Seeding addresses..."
    Address.create!(
        line_one: "1234 Test Street",
        line_two: "#1",
        zip_id: 4700
    )
    Address.create!(
        line_one: "1234 Test Street",
        line_two: "#2",
        zip_id: 4701
    )
    Address.create!(
        line_one: "1234 Test Street",
        line_two: "#3",
        zip_id: 4702
    )
    Address.create!(
        line_one: "1234 Test Street",
        line_two: "#4",
        zip_id: 4703
    )
puts "Seeding users..."
    User.create!(
        username: "admin",
        password: "password",
    )
puts "Seeding client_companies..."
    ClientCompany.create!(
        legal_name: "Company Legal Name",
        dba_name: "Company DBA Name",
        industry: "Technology",
        address_id: 2,
        co_phone: "+1 703 555 2222",
        co_email: "company@example.com",
        primary_poc_name: "Steve French",
        poc_role: "Project Manager",
        poc_phone: "571 555 1111",
        poc_email: "steve.french@example.com",
        annual_revenue: 500000.55,
        cc_notes: "...notes..."
    )
puts "Seeding clients..."
    Client.create!(
        first_name: "Steve",
        last_name: "French",
        job_title: "Project Manager",
        client_phone: "+1 571 555 1111",
        client_email: "steve.french@example.com",
        client_company_id: 1,
        client_notes: "...notes..."
    )
puts "Seeding skills..."
    Skill.create!(
        skill_name: "Ruby on Rails",
        employee_id: 1,
        subcontractor_id: nil
    )
    Skill.create!(
        skill_name: "Javascript",
        employee_id: nil,
        subcontractor_id: 1
    )
puts "Seeding subcontractors..."
    Subcontractor.create!(
        company_legal_name: "Subcontractor Legal Name",
        company_dba: "Subcontractor DBA Name",
        address_id: 3,
        primary_poc_name: "Johnny English",
        poc_role: "Owner",
        poc_phone: "+1 202 555 1234",
        poc_email: "johnny.english@example.com",
        sub_tax_number: "12-3456789",
        skill_id: 2,
        active?: true,
        sub_notes: "...notes..."
    )
puts "Seeding employees..."
    Employee.create!(
        first_name: "Rudolph",
        middle_name: "Rednose",
        last_name: "Reindeer",
        suffix: "iii",
        gender: "M",
        emp_phone: "+1 999 555 1234",
        emp_email: "rudy@example.com",
        address_id: 4,
        tax_number: "111-11-1111",
        job_title: "Engineer",
        skill_id: 1,
        start_date: 2.years.ago,
        hourly_or_salary: "Hourly",
        hourly_rate: 45.55,
        annual_salary: 0.00,
        pto_policy: "160 Hours/year, 80 Hours rollover (max 300 hours)",
        active?: true,
        emp_notes: "...notes..."
    )
puts "Seeding projects..."
    Project.create!(
        project_name: "Example Project 1",
        project_desc: "Description of project 1",
        project_notes: "...notes...",
        address_id: 1,
        user_id: 1
    )
puts "Seeding contracts..."
    Contract.create!(
        contract_title: "Contract One",
        contract_value: 2500.55,
        contract_notes: "...notes...",
        project_id: 1,
        client_company_id: 1,
        client_id: 1,
        employee_id: 1,
        subcontractor_id: 1,
        user_id: 1
    )
puts "...done seeding!"
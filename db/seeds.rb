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

puts "Seeding users..."
    u1 = User.create!(
        username: "admin",
        password: "password",
        first_name: "Admin",
        last_name: "Admin",
        phone: "+1 571 319 1994",
        email: "alexjspagnoli@outlook.com"
    )
puts "Seeding projects..."
    p1 = Project.create!(
        project_name: "Example Project 1",
        project_desc: "Description of project 1",
        notes: "...notes...",
        user_id: u1.id
    )
puts "Seeding client_companies..."
    o1 = ClientCompany.create!(
        legal_name: "Company Legal Name",
        dba_name: "Company DBA Name",
        industry: "Technology",
        phone: "+1 703 555 2222",
        email: "company@example.com",
        primary_poc_name: "Steve French",
        poc_role: "Project Manager",
        poc_phone: "571 555 1111",
        poc_email: "steve.french@example.com",
        annual_revenue: 500000.55,
        notes: "...notes..."
    )
puts "Seeding clients..."
    k1 = Client.create!(
        first_name: "Steve",
        last_name: "French",
        job_title: "Project Manager",
        phone: "+1 571 555 1111",
        email: "steve.french@example.com",
        client_company_id: o1.id,
        notes: "...notes..."
    )
puts "Seeding skills..."
    s1 = Skill.create!(
        skill_name: "Ruby on Rails",
    )
    s2 = Skill.create!(
        skill_name: "Ruby on Rails",
    )
puts "Seeding subcontractors..."
    h1 = Subcontractor.create!(
        company_legal_name: "Subcontractor Legal Name",
        company_dba: "Subcontractor DBA Name",
        primary_poc_name: "Johnny English",
        poc_role: "Owner",
        poc_phone: "+1 202 555 1234",
        poc_email: "johnny.english@example.com",
        tax_number: "12-3456789",
        skill_id: s2.id,
        active?: true,
        notes: "...notes..."
    )
puts "Seeding employees..."
    e1 = Employee.create!(
        first_name: "Rudolph",
        middle_name: "Rednose",
        last_name: "Reindeer",
        suffix: "iii",
        gender: "M",
        phone: "+1 999 555 1234",
        email: "rudy@example.com",
        tax_number: "111-11-1111",
        job_title: "Engineer",
        skill_id: s1.id,
        start_date: 2.years.ago,
        hourly_or_salary: "Hourly",
        hourly_rate: 45.55,
        annual_salary: 0.00,
        pto_policy: "160 Hours/year, 80 Hours rollover (max 300 hours)",
        active?: true,
        notes: "...notes..."
    )
puts "Seeding contracts..."
    c1 = Contract.create!(
        contract_title: "Contract One",
        contract_value: 2500.55,
        contract_notes: "...notes...",
        project_id: p1.id,
        client_company_id: o1.id,
        client_id: k1.id,
        employee_id: e1.id,
        subcontractor_id: h1.id,
        user_id: u1.id
    )
puts "Seeding addresses..."
    a1 = Address.create!(
        line_one: "1234 Test Street",
        line_two: "#1",
        zip_id: 0
    )
    a2 = Address.create!(
        line_one: "1234 Test Street",
        line_two: "#2",
        zip_id: 0
    )
    a3 = Address.create!(
        line_one: "1234 Test Street",
        line_two: "#3",
        zip_id: 0
    )
    a4 = Address.create!(
        line_one: "1234 Test Street",
        line_two: "#4",
        zip_id: 0
    )
puts "...done seeding!"
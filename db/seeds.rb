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


puts "Seeding users..."


puts "Seeding employees..."


puts "Seeding clients..."


puts "Seeding projects..."


puts "Seeding companies..."


# puts "Seeding zip_codes..."
#     # Zip_code.create


puts "Seeding job_titles..."


puts "Seeding skills..."


puts "Seeding gov_titles..."


puts "Seeding addresses..."


puts "Seeding phone_numbers..."


puts "Seeding emails..."


puts "Seeding emp_categories..."


puts "Seeding social_security_numbers..."


puts "Seeding itins..."


puts "Seeding access_levels..."


puts "Seeding sales_leads..."


puts "Seeding hiring_leads..."


puts "Seeding employer_identification_numbers..."


puts "Done seeding!"
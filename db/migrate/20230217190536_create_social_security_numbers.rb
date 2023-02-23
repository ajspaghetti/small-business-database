class CreateSocialSecurityNumbers < ActiveRecord::Migration[7.0]
  def change
    create_table :social_security_numbers do |t|
      t.integer :ssn_number
      t.date :ssn_valid_since
      t.date :ssn_valid_until
      
      t.timestamps
    end
  end
end

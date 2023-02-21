class CreateUsers < ActiveRecord::Migration[7.0]
  def change
    create_table :users do |t|
      t.string :username
      t.string :password_digest
      t.string :email_id
      t.integer :job_title_id
      t.integer :access_level_id
  
    end
  end
end

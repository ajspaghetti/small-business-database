class CreateUsers < ActiveRecord::Migration[7.0]
  def change
    create_table :users do |t|
      t.string :username
      t.string :password#_digest
      t.string :first_name
      t.string :last_name
      t.string :user_phone
      t.string :user_email
    end
  end
end

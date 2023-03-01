class CreateUsers < ActiveRecord::Migration[7.0]
  def change
    create_table :users do |t|
      t.string :username
      t.string :password#_digest
      t.string :first_name
      t.string :last_name
      t.string :phone
      t.string :email
    end
  end
end
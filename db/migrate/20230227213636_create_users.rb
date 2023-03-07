class CreateUsers < ActiveRecord::Migration[7.0]
  def change
    create_table :users do |t|
      t.string :username
      t.string :password_digest
      # t.string :admin # to be able to create users only from an admin account
      # phone # to be able to SSO
      # email # to be able to SSO, log-in
    end
  end
end

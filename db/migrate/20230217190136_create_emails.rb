class CreateEmails < ActiveRecord::Migration[7.0]
  def change
    create_table :emails do |t|
      t.string :owner
      t.string :email_address
      t.text :notes

      t.timestamps
    end
  end
end

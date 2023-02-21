class CreateStates < ActiveRecord::Migration[7.0]
  def change
    create_table :states do |t|
      t.string :state_name
      t.integer :country_id
    end
  end
end

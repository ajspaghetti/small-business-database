class CreateCounties < ActiveRecord::Migration[7.0]
  def change
    create_table :counties do |t|
      t.string :county_name
      t.integer :state_id
      t.integer :country_id
    end
  end
end

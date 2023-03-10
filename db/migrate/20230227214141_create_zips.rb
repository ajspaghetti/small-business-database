class CreateZips < ActiveRecord::Migration[7.0]
  def change
    create_table :zips do |t|
      t.integer :zip_code
      t.decimal :latitude
      t.decimal :longitude
      t.string :city
      t.string :state # acronym
      t.string :county
    end
  end
end

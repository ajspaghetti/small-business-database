class CreateAccessLevels < ActiveRecord::Migration[7.0]
  def change
    create_table :access_levels do |t|
      t.string :access_type # admin, external-admin, manager, viewer
    end
  end
end

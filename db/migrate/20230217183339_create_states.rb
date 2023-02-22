class CreateStates < ActiveRecord::Migration[7.0]
  def change
    create_table :states do |t|
      t.string :state_acronym
      t.string :state_name
    end
  end
end

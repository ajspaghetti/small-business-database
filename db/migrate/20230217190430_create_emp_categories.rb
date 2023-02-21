class CreateEmpCategories < ActiveRecord::Migration[7.0]
  def change
    create_table :emp_categories do |t|
      t.string :category_title
      t.string :category_abbreviation
    end
  end
end

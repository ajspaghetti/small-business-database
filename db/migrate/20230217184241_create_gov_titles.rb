class CreateGovTitles < ActiveRecord::Migration[7.0]
  def change
    create_table :gov_titles do |t|
      t.string :gov_job_title
     
    end
  end
end

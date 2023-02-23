class CreateJobTitles < ActiveRecord::Migration[7.0]
  def change
    create_table :job_titles do |t|
      t.string :job_title
    end
  end
end

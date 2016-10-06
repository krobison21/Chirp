class CreateSightings < ActiveRecord::Migration
  def change
    create_table :sightings do |t|
      t.string :username
      t.string :location
      t.string :behavior

      t.timestamps 
    end
  end
end

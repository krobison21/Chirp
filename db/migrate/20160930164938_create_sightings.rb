class CreateSightings < ActiveRecord::Migration
  def change
    create_table :sightings do |t|
      #t.string :username
      t.string :location
      t.boolean :singing
      t.boolean :aggressive
      t.boolean :flying
      t.boolean :other
      t.string :notes
      t.references :user

      t.timestamps 
    end
  end
end

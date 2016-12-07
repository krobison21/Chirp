class CreateSightings < ActiveRecord::Migration
  def change
    create_table :sightings do |t|
      #t.string :username
      t.string :typez
      t.string :location
      t.string :singing
      t.string :aggressive
      t.string :flying
      t.string :other
      t.string :notes
      t.references :user

      t.timestamps 
    end
  end
end

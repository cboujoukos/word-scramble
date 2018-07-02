class CreateWords < ActiveRecord::Migration[5.1]
  def change
    create_table :words do |t|
      t.string :name
      t.string :difficulty

      t.timestamps
    end
  end
end

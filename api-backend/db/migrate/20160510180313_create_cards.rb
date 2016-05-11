class CreateCards < ActiveRecord::Migration[5.1]
  def change
    create_table :cards do |t|
      t.string :title
      t.references :list
      t.string :description

      t.timestamps
    end
  end
end

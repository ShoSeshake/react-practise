class CreateTweets < ActiveRecord::Migration[6.0]
  def change
    create_table :tweets do |t|
      t.text       :title
      t.text       :text
      t.string     :image
      t.references :user,   foreign_key: true, null: false
      t.timestamps
    end
  end
end

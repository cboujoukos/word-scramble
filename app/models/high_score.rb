class HighScore < ApplicationRecord

  def self.top_ten
    order(score: :desc).limit(10)
  end
end

class Word < ApplicationRecord
  def self.random_from(diff)
    where(difficulty: diff).sample
  end
end

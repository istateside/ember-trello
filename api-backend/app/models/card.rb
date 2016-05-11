class Card < ApplicationRecord
  attr_reader :type
  belongs_to :list
  
  def type
    "card"
  end
end

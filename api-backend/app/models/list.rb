class List < ApplicationRecord
  attr_reader :type
  has_many :cards
  
  def type
    "list"
  end
end

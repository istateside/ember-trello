class ListSerializer < ActiveModel::Serializer
  attributes :id, :title, :type
  has_many :cards
end

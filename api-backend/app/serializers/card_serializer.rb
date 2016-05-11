class CardSerializer < ActiveModel::Serializer
  attributes :id, :title, :description, :type
  belongs_to :list
end

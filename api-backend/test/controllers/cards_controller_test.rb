require 'test_helper'

class CardsControllerTest < ActionDispatch::IntegrationTest
  setup do
    @card = cards(:one)
  end

  test "should get index" do
    get cards_url
    assert_response :success
  end

  test "should create card" do
    assert_difference('Card.count') do
      post cards_url, params: { card: { description: @card.description, list: @card.list, title: @card.title } }
    end

    assert_response 201
  end

  test "should show card" do
    get card_url(@card)
    assert_response :success
  end

  test "should update card" do
    patch card_url(@card), params: { card: { description: @card.description, list: @card.list, title: @card.title } }
    assert_response 200
  end

  test "should destroy card" do
    assert_difference('Card.count', -1) do
      delete card_url(@card)
    end

    assert_response 204
  end
end

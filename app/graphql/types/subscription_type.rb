module Types
  class SubscriptionType < Types::BaseObject
    field :test_subscription, subscription: Subscriptions::TestSubscription
  end
end

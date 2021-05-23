module Subscriptions
  class TestSubscription < BaseSubscription
    payload_type String

    def subscribe
      'Hello world!'
    end
  end
end

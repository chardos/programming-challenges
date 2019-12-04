describe("Straights - ", function() {
  var resolve_hand = require('../resolve_hand');

  var hand;
  beforeEach(function() {
    hand = resolve_hand( [ '8D', '9S', 'TC', 'JH', 'QS' ] )
  });

  it("given 8, 9, 10, J, Q it should return a straight", function() {
    expect(hand.rank).toEqual('Straight');
  });
  it("given 8, 9, 10, J, Q it should give Q as high card", function() {
    expect(hand.highCard).toEqual('Q');
  });
  it("given A to 5, it should give 5 as high card", function() {
    hand = resolve_hand( [ 'AD', '2S', '3C', '4H', '5S' ] )
    expect(hand.rank).toEqual('Straight');
    expect(hand.highCard).toEqual('5');
  });

});

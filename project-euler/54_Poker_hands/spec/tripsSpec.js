var resolve_hand = require('../resolve_hand');
var getWinner = require('../getWinner');
describe("Trips: ", function() {

  describe("Given trip 5s", function() {
    it("should result trips", function() {
      hand = resolve_hand( [ '5D', '5S', '5C', 'KH', '7S' ] )
      expect(hand.rank).toEqual('Trips');
    });
  });
  describe("Given no trip 5s", function() {
    it("shouldnt result trips", function() {
      hand = resolve_hand( [ '3D', '5S', '5C', 'KH', '7S' ] )
      expect(hand.rank).not.toBe('Trips');
    });
  });

});

var resolve_hand = require('../resolve_hand');
var getWinner = require('../getWinner');

describe("Pair: ", () => {
  describe("Given a pair of aces ", () => {
    var hand = resolve_hand( [ 'AD', 'AS', '5C', 'JH', '7S' ] )

    it("should result in a pair", function() {
      expect(hand.rank).toEqual('Pair');
    });
    console.log(hand);
    it("high card should be a jack", function() {
      expect(hand.rank).toEqual('Pair');
    });
  })

  describe('Comparing equal pairs, first kicker', () =>{
    var hand = '7S 7S KD JS 3S 7H 7C QD 4D JD'
    it("top kicker should win", function() {
      expect(getWinner(hand)).toEqual('p1');
    });
  });

  describe('Comparing equal pairs, second kicker', () =>{
    var hand = '7S 7S KD QS 3S 7H 7C KD 4D JD'
    it("top kicker should win", function() {
      expect(getWinner(hand)).toEqual('p1');
    });
  });

  describe('Comparing equal pairs, third kicker', () =>{
    var hand = '7S 7S KD 4S 5S 7H 7C KD 4D 6D'
    it("top kicker should win", function() {
      expect(getWinner(hand)).toEqual('p2');
    });
  });
});

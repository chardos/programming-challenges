var resolveHand = require('../resolve_hand');
var getWinner = require('../getWinner');

describe('Two pair: ', () =>{
  describe('Given two aces and two jacks', () =>{

    beforeEach(function() {
      hand = resolveHand( [ 'AD', 'AS', 'JC', 'JH', '7S' ] )
    });
    it("should result in 2 pair", function() {
      expect(hand.rank).toEqual('Two pair');
    });
    it("pair indexes should be 12 & 9", function() {
      expect(hand.pairIndexes).toEqual([12,9]);
    });
  });

  describe('Comparing different top pairs', () =>{
    var hand = '3S 3S AD AS JS TH TC 4D 4D JD'
    it("highest top pair should win", function() {
      expect(getWinner(hand)).toEqual('p1');
    });
  });
  describe('Comparing same top pair', () =>{
    var hand = '3S 3S TD TS JS TH TC 4D 4D JD'
    it("highest lower pair should win", function() {
      expect(getWinner(hand)).toEqual('p2');
    });
  });
  describe('Comparing same low pair', () =>{
    var hand = '3S 3S TD TS AS TH TC 3D 3D JD'
    it("highest high card should win", function() {
      expect(getWinner(hand)).toEqual('p1');
    });
  });
  describe('Same pairs and kicker', () =>{
    var hand = '3S 3S TD TS AS TH TC 3D 3D AD'

    it("should be a draw", function() {
      expect(getWinner(hand)).toEqual('draw');
    });
  });
});

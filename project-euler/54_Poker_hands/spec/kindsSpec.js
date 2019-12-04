describe("Kinds - ", function() {
  var resolve_hand = require('../resolve_hand');

  describe('Given quads (four aces)', () =>{
    beforeEach(function() {
      hand = resolve_hand( [ 'AD', 'AS', 'AC', 'AH', '8S' ] )
    });
    it("it should result in quads", function() {
      expect(hand.rank).toEqual('Quads');
    });
    it("the quadIndex should be 12", function() {
      expect(hand.quadIndex).toEqual(12);
    });
  })

  describe('Given three jacks and two 8s', () =>{
    it("should result full house", function() {
      hand = resolve_hand( [ 'JD', 'JS', 'JC', '8H', '8S' ] )
      expect(hand.rank).toEqual('Full house');
    });
  })

});

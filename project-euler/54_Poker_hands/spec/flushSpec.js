describe("Flushes - ", function() {
  var resolve_hand = require('../resolve_hand');

  describe('Given five spades (Ten high)', () =>{
    var hand;
    beforeEach(function() {
      hand = resolve_hand( [ '8S', '9S', '5S', '2S', 'TS' ] )
    });

    it("should return flush", function() {
      expect(hand.rank).toBe('Flush');
    });
    it("should return a ten as highcard", function() {
      expect(hand.highCard).toBe('T');
    });
  });

  it("given three spades it should not return flush", function() {
    hand = resolve_hand( [ '8S', '9S', '5C', '2D', 'TS' ] )
    expect(hand).not.toBe('Flush');
  });



});

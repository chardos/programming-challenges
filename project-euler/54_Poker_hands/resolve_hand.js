var kinds = require('./ranks/kinds');
var straights = require('./ranks/straights');
var helpers = require('./helpers');
var cards =['2', '3', '4', '5', '6', '7', '8', '9', 'T', 'J', 'Q', 'K', 'A'];
var ranks = ['Royal flush', 'Straight flush', 'Quads', 'Full house',
  'Flush', 'Straight', 'Trips', 'Two pair', 'Pair', 'High card']

var royalFlush =  hand => {
  var localStraightFlush = straightFlush(hand);
  if (localStraightFlush && localStraightFlush.highCard == 'A') {
    return {
      rank: 'Royal flush'
    }
  }
}
var straightFlush = hand => {
  var localStraight = straight(hand);
  if( flush(hand) && localStraight ){
    var rank = 'Straight flush'
    return {
      rank: rank,
      highCard: localStraight.highCard,
      highCardIndex: localStraight.highCardIndex
    }
  }
}
var flush = hand => {
  var values = hand.map( x => x[0] )
  var indexes = values.map( x => cards.indexOf(x) )
  var indexes = helpers.sortNumerically(indexes, 'desc');
  var highCardIndex = indexes[0];
  var suits = hand.map( x => x[1] )
  if(helpers.uniq(suits).length == 1){
    var rank = 'Flush';
    return {
      rank: rank,
      highCard: cards[highCardIndex],
      highCardIndex: highCardIndex
    }
  }
}
var straight = hand => {
  return straights(cards, hand)
}
var quads = hand => {
  var hands = kinds.getRank(hand);
  if(hands.quads.length == 1) {
    hands.rank = 'Quads';
    hands.quadIndex = cards.indexOf(hands.quads[0])
    return hands;
  }
}
var fullHouse = hand => {
  var hands = kinds.getRank(hand);
  if(hands.trips.length == 1 && hands.pairs.length == 1) {
    hands.rank = 'Full house';
    hands.tripsIndex = cards.indexOf(hands.trips[0]);
    hands.pairsIndex = cards.indexOf(hands.pairs[0]);
    return hands;
  }
}
var trips = hand => {
  var hands = kinds.getRank(hand);
  if(hands.trips.length == 1) {
    hands.rank = 'Trips';
    hands.tripsIndex = cards.indexOf(hands.trips[0])
    return hands;
  }
}
var twoPair = hand => {
  var hands = kinds.getRank(hand);
  if(hands.pairs.length == 2) {
    hands.rank = 'Two pair';
    hands.pairIndexes = hands.pairs.map(x => cards.indexOf(x))
    hands.pairIndexes = helpers.sortNumerically(hands.pairIndexes, 'desc')
    hands.singleIndex = hands.singles.map(x => cards.indexOf(x))
    return hands;
  }
}
var pair = hand => {
  var hands = kinds.getRank(hand);
  var singleIndexes = hands.singles.map(x => cards.indexOf(x))
  singleIndexes = helpers.sortNumerically(singleIndexes, 'desc')
  if(hands.pairs.length == 1 && hands.trips.length == 0) {
    hands.rank = 'Pair';
    hands.pairIndex = cards.indexOf(hands.pairs[0])
    hands.singleIndexes = singleIndexes
    return hands;
  }
}
var highCard = hand => {
  var valueIndexes = hand.map( x => cards.indexOf(x[0]) );
  valueIndexes = helpers.sortNumerically(valueIndexes, 'desc')
  return {
    valueIndexes: valueIndexes,
    rank: 'High card'
  }
}
resolveHand = hand => {
  if(royalFlush(hand)){
    return royalFlush(hand)
  }
  if(straightFlush(hand)){
    return straightFlush(hand)
  }
  if(quads(hand)){
    return quads(hand)
  }
  if(fullHouse(hand)){
    return fullHouse(hand)
  }
  if(flush(hand)){
    return flush(hand)
  }
  if(straight(hand)){
    return straight(hand)
  }
  if(trips(hand)){
    return trips(hand);
  }
  if(twoPair(hand)){
    return twoPair(hand);
  }
  if(pair(hand)){
    return pair(hand);
  }
  if(highCard(hand)){
    return highCard(hand);
  }
}

module.exports = resolveHand;

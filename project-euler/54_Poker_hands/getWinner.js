var resolveHand = require('./resolve_hand');
var ranks = ['Royal flush', 'Straight flush', 'Quads', 'Full house',
  'Flush', 'Straight', 'Trips', 'Two pair', 'Pair', 'High card']

var getWinner = hand => {
  var hand = hand.split(' ');
  p1 = hand.splice(0,5);
  p2 = hand;
  p1 = resolveHand(p1);
  p2 = resolveHand(p2);
  // console.log(p1);
  // console.log(p2);
  var p1rankIndex = ranks.indexOf(p1.rank)
  var p2rankIndex = ranks.indexOf(p2.rank)
  if(p1rankIndex < p2rankIndex){
    return 'p1';
  }
  else if (p1rankIndex > p2rankIndex){
    return 'p2'
  }
  else if (p1rankIndex == p2rankIndex){
    if(p1.rank == 'Royal flush'){
      return 'draw'
    }
    if(p1.rank == 'Straight flush'){
      if (p1.highCardIndex == p2.highCardIndex) return 'Draw'
      return p1.highCardIndex > p2.highCardIndex ? 'p1' : 'p2'
    }
    if(p1.rank == 'Quads'){
      return p1.quadIndex > p2.quadIndex ? 'p1' : 'p2'
    }
    if(p1.rank == 'Full house'){
      if (p1.tripsIndex !== p2.tripsIndex){
        return p1.tripsIndex > p2.tripsIndex ? 'p1' : 'p2';
      }
      else if (p1.pairsIndex !== p2.pairsIndex){
        return p1.pairsIndex > p2.pairsIndex ? 'p1' : 'p2';
      }
      return 'draw';
    }
    if(p1.rank == 'Flush'){
      if (p1.highCardIndex == p2.highCardIndex) return 'Draw'
      return p1.highCardIndex > p2.highCardIndex ? 'p1' : 'p2'
    }
    if(p1.rank == 'Straight'){
      if (p1.highCardIndex == p2.highCardIndex) return 'Draw'
      return p1.highCardIndex > p2.highCardIndex ? 'p1' : 'p2'
    }
    if(p1.rank == 'Trips'){
      return p1.tripsIndex > p2.tripsIndex ? 'p1' : 'p2'
    }
    if(p1.rank == 'Two pair'){
      //check first card
      if (p1.pairIndexes[0] !== p2.pairIndexes[0]) {
        return p1.pairIndexes[0] > p2.pairIndexes[0] ? 'p1' : 'p2'
      }
      //else check second card
      else if(p1.pairIndexes[1] !== p2.pairIndexes[1]){
        return p1.pairIndexes[1] > p2.pairIndexes[1] ? 'p1' : 'p2'
      }
      //else high card
      else if(p1.singleIndex[0] !== p2.singleIndex[0]){
        return p1.singleIndex[0] > p2.singleIndex[0] ? 'p1' : 'p2'
      }
      else{
        return 'draw';
      }
    }
    if(p1.rank == 'Pair'){
      if(p1.pairIndex !== p2.pairIndex){
        return p1.pairIndex > p2.pairIndex ? 'p1' : 'p2';
      }
      for(i=0; i<3; i++){
        if(p1.singleIndexes[i] !== p2.singleIndexes[i]){
          return p1.singleIndexes[i] > p2.singleIndexes[i] ? 'p1' : 'p2';
        }
      }
      return 'draw'
    }
    if(p1.rank == 'High card'){
      for(i=0; i<5; i++){
        if(p1.valueIndexes[i] !== p2.valueIndexes[i]){
          return p1.valueIndexes[i] > p2.valueIndexes[i] ? 'p1' : 'p2';
        }
      }
      return 'draw'
    }

  }
}



module.exports = getWinner;

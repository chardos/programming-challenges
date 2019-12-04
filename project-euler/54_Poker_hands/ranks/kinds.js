o = {};

//Make [ '8', '8', '8', 'J', 'J' ] => { '8': 3, J: 2 }
var count = values => {
  var counts = {};
  values.forEach( x => {
    counts[x] ? counts[x]++ : counts[x] = 1;
  })
  return counts;
}

//Makes { '8': 3, J: 1, T: 1 } => { '8': 'Trips' }
o.getRank = hand => {
  var values = hand.map( x => x[0] );
  var counts = count(values);
  var hands = {};
  hands.quads = [];
  hands.trips = [];
  hands.pairs = [];
  hands.singles = [];
  for(card in counts){
    if (counts[card] == 4) {
      hands.quads.push(card)
    }
    if (counts[card] == 3) {
      hands.trips.push(card)
    }
    if (counts[card] == 2) {
      hands.pairs.push(card)
    }
    if (counts[card] == 1) {
      hands.singles.push(card)
    }
  }
  return hands;
}

//Makes { '8': 3, J: 1, T: 1 } => { '8': 'Trips' }
o.getGroupings = counts => {
  var groupings = {};
  for(card in counts){
    if (counts[card] == 4) {
      groupings[card] = 'Quads'
    }
    if (counts[card] == 3) {
      groupings[card] = 'Trips'
      //check if the remaining is a 2 for a fullhouse
    }
    if (counts[card] == 2) {
      groupings[card] = 'Pair'
      //check if the remaining is a 2 for 2 pair
    }
    if (counts[card] == 1) {
      groupings[card] = 'Single'
    }
  }
  return groupings;
}


module.exports = o;

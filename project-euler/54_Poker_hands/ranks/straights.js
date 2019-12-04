straights = (cards, hand) => {
  var count=0;
  var values = hand.map( x => x[0] )
  var indexes = values.map( x => cards.indexOf(x) )
  var indexes = helpers.sortNumerically(indexes, 'desc');
  var highCardIndex = indexes[0];

  indexes.forEach( (x, i) => {
    //if next number is not += 1
    if(indexes[i] == indexes[i+1]+1 ){
      count++;
    }
  })
  if( count == indexes.length - 1){
    return {
      rank: 'Straight',
      highCardIndex: highCardIndex,
      highCard: cards[highCardIndex]
    };
  }
  //catch a to 5
  else if ( JSON.stringify(indexes) == JSON.stringify([12,3,2,1,0]) ){
    return {
      rank: 'Straight',
      highCardIndex: 3,
      highCard: '5'
    };
  }
}

module.exports = straights;

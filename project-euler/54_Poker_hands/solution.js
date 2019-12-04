fs = require('fs');
var getWinner = require('./getWinner');

// var hand = '8D 8S 3C 4H 7S AS TS JS QS KS';
// var highCard = 'AS KS 5D 2S 3S AD KS 5C 6D 2D';
// var straight = '3S 4S 5D 6S 7S 6D 7S 8C 9D TD';
// var twoPair = '3S 3S 4D 4S JS AH AC 2D 2D TD';
// var trips = '3S 3S 3D AS JS 6H 6C 6D 9D TD';
// var flush = '3S 9S 4S JS QS 3D 4D JD 6D 7D';
// var quads = 'AD AD AD AD 7D JS JS JS JS QS';
// var strFlush = '8S 9S TS JS QS 3D 4D 5D 6D 7D';
// var fullHouse = '8S 8S 8S JS JS 8D 8D 8D AD AD';
// var straights = 'AS 2S 3C 4S 5S 6C 7S 8D 9D TD';
 // console.log(getWinner('TD 8C 4H 7C TC KC 4C 3H 7S KS'));

var p1winsFromFile = () => {
  var lineReader = require('readline').createInterface({
    input: require('fs').createReadStream('poker.txt')
  });

  var p1wins = 0;
  var p2wins = 0;
  var draws = 0;
  lineReader.on('line', function (line) {
    var winner = getWinner(line);
    if(winner == 'p1'){
      p1wins ++;
    }
    if(winner == 'p2'){
      p2wins ++;
    }
    else if(winner == 'draw'){
      draws++;
    }
    console.log(winner);
  })
  setTimeout(function(){
    console.log(p1wins);
    console.log(p2wins);
  },1000)
}
p1winsFromFile()

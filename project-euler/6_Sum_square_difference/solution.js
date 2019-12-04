function findSumSquares(n){
  var total = 0;
  for(var i=1; i<=n; i++){
    total += i*i;
  }
  return total;
}
function findSquareSums(n){
  var total = 0;
  for(var i=1; i<=n; i++){
    total += i;
  }
  return total * total;
}

function findDifference(n){
  return findSquareSums(n) - findSumSquares(n);
}

console.log(findDifference(100));

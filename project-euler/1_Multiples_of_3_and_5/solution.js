function main(n){
  var nums = [];
  var sum = 0;

  //collect the numbers
  for(var i=0; i<=n; i++){
    if(i % 3 == 0 || i % 5 == 0){
      sum += i;
    }
  }

  return sum;
}


console.log(main(999))

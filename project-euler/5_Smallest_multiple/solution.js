
var createArray = (n) => {
  var arr = [];
  for(i=1; i<=n; i++){
    arr.push(i);
  }
  return arr;
}

function cutDividers(arr){
  //starting low to high, can these numbers be divided (with 0 remainder)
  //into a number larger in the array?
  //if yes, splice it out of the array, and subtract 1 from i

  //note: in the end realised that this will just cut the first half of the array.
  for(var i=0; i<arr.length; i++){
    for(var j=i+1; j<arr.length; j++){
      if(arr[j] % arr[i] == 0){
        arr.splice(i,1);
        i--;
        break;
      }
    }
  }
  return arr;
}

function main(num){
  var arr = createArray(num)
  arr = cutDividers(arr);
  var found = false;
  var increment = num;
  var n = num;
  var count = 0;
  while(found == false){

    for(var i=0; i < arr.length; i++){
      //divide i into numbers 1 to 10
      if(n % arr[i] == 0){
        count++;
      }
      else{
        count = 0;
        break;
      }
    }

    if(count == arr.length){
      console.log('its '+ n);
      break;
    }
    n+=increment;

  }
}
console.time('a')
main(20)
console.timeEnd('a')

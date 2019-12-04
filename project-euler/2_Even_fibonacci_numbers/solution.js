
function main(){
  var arr = [1,2];
  var sumArr = [2];
  var a = 0;
  var i = 2;
  while(a<4000000){
    a = arr[i-2] + arr[i-1];
    if(a % 2 == 0){
      sumArr.push(a);
    }
    arr.push(a);
    i++;
  }
  var finalSum = sumArr.reduce(function(a, b) {
    return a + b;
  });
  console.log(finalSum);

}
main()

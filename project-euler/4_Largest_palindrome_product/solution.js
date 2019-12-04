//A palindromic number reads the same both ways. The largest palindrome made from the product of two 2-digit numbers is 9009 = 91 × 99. Find the largest palindrome made from the product of two 3-digit numbers.

function palindrome(n){
  var reversed = n.toString().split('').reverse().join('');
  if(reversed == n){
    return true;
  }
}

function main(){
  var largest=0;
  for(var i=0; i<=999; i++){
    for(var j=0; j<=999; j++){
      if(palindrome(i*j)){
        if (i*j > largest) largest = i*j
      }
    }
  }
  console.log(largest);
}
main()
//multiple all 3 digit numbers

//if larger set largest

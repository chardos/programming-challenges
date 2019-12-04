function main(n){
  for(var i=2; i<=n; i++){
    while(n % i == 0){
      n = n / i;
      console.log(i);
      if ( n== 1 || n== i){
        return i;
      }

    }
  }
}
main(600851475143)

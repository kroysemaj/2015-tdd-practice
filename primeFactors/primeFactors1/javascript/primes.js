function primes(){
  return {
    factor: function (number){
      var result = [];
      for(var i = 2; i <= number; i++){
        while(number % i === 0){
          result.push(i);
          number /= i;
        }
      }
      return result;
    }
  }
}
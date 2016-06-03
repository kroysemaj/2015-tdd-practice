function primes(number){
  var factors = []

  var candidate = 2;

  for(var candidate = 2; number >= candidate; candidate++){
    for(; number % candidate === 0; number /= candidate){
      factors.push(candidate);
    }
  }

  // if(number > 1){
  //   factors.push(number);
  // }

  return factors;
}
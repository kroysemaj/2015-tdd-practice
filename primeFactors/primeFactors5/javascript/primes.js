function primes(n) {
  var factors = [];

  for(var candidate = 2; n >= candidate; candidate++){
    for(; n % candidate === 0; n /= candidate){
      factors.push(candidate);
    }
  }

  return factors;
}

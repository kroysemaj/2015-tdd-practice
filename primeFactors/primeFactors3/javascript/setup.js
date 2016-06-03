function primes(n){
  var factors = [];

  for(var i=2; n >= i; i++){
    for(; n % i === 0; n /= i){
      factors.push(i);
    }
  }

  return factors;
}
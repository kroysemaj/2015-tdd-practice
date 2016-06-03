function fizzbuzz(n) {
  var result = "";
  if (isDivisibleBy(n, 3)) {
    result += 'fizz';
  }
  if (isDivisibleBy(n, 5)) {
    result += 'buzz';
  }
  return result || n;
}

function isDivisibleBy(n, divisor){
  return n % divisor === 0;
}

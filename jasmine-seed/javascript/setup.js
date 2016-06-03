function fizzBuzz(number){
  if ( isDivisibleBy(number, 15)){
    return "FizzBuzz";
  }
  if (number % 3 === 0) {
    return "Fizz";
  }
  if ( number % 5 === 0){
    return "Buzz";
  }

  return number;
}

function isDivisibleBy(x, y) {
  return x % y === 0
}
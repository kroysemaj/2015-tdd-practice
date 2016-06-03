function fizzBuzz(n){
  var response = "";

  if(isDivisbleBy(n, 3)){
    response += "Fizz";
  }
  if(isDivisbleBy(n, 5)){
    response += "Buzz";
  }

  return response || n;
}

function isDivisbleBy(n, divisor){
  return n % divisor === 0;
}
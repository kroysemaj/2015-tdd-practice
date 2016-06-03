describe('FizzBuzz', function(){
  it('should return 1 when passed 1', function() {
    expect(fizzBuzz(1)).toBe(1);
  });

  it('should return 2 when passed 2', function() {
    expect(fizzBuzz(2)).toBe(2);
  });

  it('should return Fizz when passed 3', function() {
    expect(fizzBuzz(3)).toBe("Fizz");
  });

  it('should return Fizz when passed 6', function() {
    expect(fizzBuzz(6)).toBe("Fizz");
  });

  it('should return Buzz when passed 5', function() {
    expect(fizzBuzz(5)).toBe("Buzz");
  });

  it('should return Buzz when passed 10', function() {
    expect(fizzBuzz(10)).toBe("Buzz");
  });

  it('should return FizzBuzz when passed 15', function() {
    expect(fizzBuzz(15)).toBe("FizzBuzz");
  });

  it('should return FizzBuzz when passed 30', function() {
    expect(fizzBuzz(30)).toBe("FizzBuzz");
  });

});


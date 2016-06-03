describe('FizzBuzz', function(){
  it('should 1 for 1', function() {
    expect(fizzBuzz(1)).toBe(1);
  });
  it('should print 2 for 2', function() {
    expect(fizzBuzz(2)).toBe(2);
  });
  it('should print Fizz for 3', function() {
    expect(fizzBuzz(3)).toBe("Fizz");
  });
  it('should print Fizz for 6', function() {
    expect(fizzBuzz(6)).toBe("Fizz");
  });

  it('should print Buzz for 5', function() {
    expect(fizzBuzz(5)).toBe("Buzz");
  });

  it('Should print FizzBuzz for 15', function() {
    expect(fizzBuzz(15)).toBe('FizzBuzz');
  });
});


describe('FizzBuzz', function(){
  it('should return 1 when passed 1', function() {
    expect(fizzbuzz(1)).toBe(1);
  });
  it('should return 2 when passed 2', function() {
    expect(fizzbuzz(2)).toBe(2);
  });

  it('should return fizz when passed 3', function() {
    expect(fizzbuzz(3)).toBe("fizz");
  });
  it('should return fizz when passed 6', function() {
    expect(fizzbuzz(6)).toBe("fizz");
  });

  it('should return buzz when passed 5', function() {
    expect(fizzbuzz(5)).toBe("buzz");
  });
  it('should return buzz when passed 10', function() {
    expect(fizzbuzz(10)).toBe("buzz");
  });

  it('should return fizzbuzz when passed 15', function() {
    expect(fizzbuzz(15)).toBe("fizzbuzz");
  });
  it('should return fizzbuzz when passed 30', function() {
    expect(fizzbuzz(30)).toBe("fizzbuzz");
  });


});

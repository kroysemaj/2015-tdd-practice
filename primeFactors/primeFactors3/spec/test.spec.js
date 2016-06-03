describe('Setting up tests with Jasmine', function(){
  it('should return empty when passed 1', function() {
    expect(primes(1)).toEqual([]);
  });

  it('should return [2] when passed 2', function() {
    expect(primes(2)).toEqual([2]);
  });

  it('should return [3] when passed 3', function() {
    expect(primes(3)).toEqual([3]);
  });

  it('should return [2, 2] when passed 4', function() {
    expect(primes(4)).toEqual([2, 2]);
  });

  it('should return [2, 3] when passed 6', function() {
    expect(primes(6)).toEqual([2, 3]);
  });

  it('should return [2, 2, 2] when passed 8', function() {
    expect(primes(8)).toEqual([2, 2, 2]);
  });

  it('should return [3, 3] when passed 8', function() {
    expect(primes(9)).toEqual([3, 3]);
  });
});


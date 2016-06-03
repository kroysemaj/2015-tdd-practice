describe('Prime Factors', function(){
  it('should return empty for 1', function() {
    expect(primes(1)).toEqual([]);
  });

  it('should return [2] for 2', function() {
    expect(primes(2)).toEqual([2]);
  });

  it('should return [3] for 3', function() {
    expect(primes(3)).toEqual([3]);
  });

  it('should return [2, 2] for 4', function() {
    expect(primes(4)).toEqual([2, 2]);
  });

  it('should return [2, 3] for 6', function() {
    expect(primes(4)).toEqual([2, 2]);
  });

  it('should return [2, 2, 2] for 8', function() {
    expect(primes(8)).toEqual([2, 2, 2]);
  });

  it('should return [3, 3] for 9', function() {
    expect(primes(9)).toEqual([3, 3]);
  });

  it('should factor a ridiculous number', function() {
    expect(primes(234987234)).toEqual([2, 3, 89, 431, 1021])
  });


});


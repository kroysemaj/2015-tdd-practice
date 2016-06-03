describe('Prime Factors', function(){
  it('should return [2] when passed 2', function() {
    expect(primeFactors(2)).toEqual([2]);
  });

  it('should return [3] when passed 3', function() {
    expect(primeFactors(3)).toEqual([3]);
  });

  it('should return [2, 2] when passed 4', function() {
    expect(primeFactors(4)).toEqual([2, 2]);
  });

  it('should return [2, 3] when passed 6', function() {
    expect(primeFactors(6)).toEqual([2, 3]);
  });

  it('should return [5] when passed 5', function() {
    expect(primeFactors(5)).toEqual([5]);
  });

  it('should return [7] when passed 7', function() {
    expect(primeFactors(7)).toEqual([7]);
  });

  it('should return [2, 2, 2] when passed 8', function() {
    expect(primeFactors(8)).toEqual([2, 2, 2]);
  });

  it('should return [2, 59, 109] when passed 12862', function() {
    expect(primeFactors(12862)).toEqual([2, 59, 109]);
  });

  it('should return [2, 59, 109] when passed 525600', function() {
    expect(primeFactors(525600)).toEqual([2, 2, 2, 2, 2 , 3 , 3, 5, 5 , 73]);
  });


});


describe('Setting up tests with Jasmine', function(){

  var myPrimes;

  beforeEach(function() {
    myPrimes = primes();
  });

  it('should be a real thing', function() {
    expect(myPrimes.factor()).toBeDefined()
  });

  it('should be able to factor 2 - [2]', function() {
    expect(myPrimes.factor(2)).toEqual([2])
  });

  it('should be able to factor 3 - [3]', function() {
    expect(myPrimes.factor(3)).toEqual([3])
  });

  it('should be able to factor 4 - [2, 2]', function() {
    expect(myPrimes.factor(4)).toEqual([2, 2])
  });

  it('should be able to factor 6 - [2, 3]', function() {
    expect(myPrimes.factor(6)).toEqual([2, 3])
  });

  it('should be able to factor 10 - [2, 5]', function() {
    expect(myPrimes.factor(10)).toEqual([2, 5])
  });

  it('should be able to factor 15 - [3, 5]', function() {
    expect(myPrimes.factor(15)).toEqual([3, 5])
  });

  it('should be able to factor 22 - [2, 11]', function() {
    expect(myPrimes.factor(15)).toEqual([3, 5])
  });

  it('should be able to factor 2344 - [2, 2, 2, 293]', function() {
    expect(myPrimes.factor(2344)).toEqual([2, 2, 2, 293])
  });

  it('should be able to factor 48 - [2, 2, 2, 2, 3]', function() {
    expect(myPrimes.factor(48)).toEqual([2, 2, 2, 2, 3])
  });
});


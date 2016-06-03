var td = require('testdouble');

describe('Setting up tests with Jasmine', function(){
  var myTestDouble = td.function("#foo")

  it('should be true', function() {
    expect(true).toBe(true);
  });

  it('shold see the source file', function() {
    expect(compliment()).toBe('You look nice today');
  });
});


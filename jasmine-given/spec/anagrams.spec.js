describe('Messing around with Jasmine-given', function(){
  it('should let me do the thing', function() {
    Given(function(){
      var subject = [];
    });
    When(function(){
      subject.push('whatev');
    });
    Then(function(){
      expect(subject.length).toBe(1);
    });
  });


});


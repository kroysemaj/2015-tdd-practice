describe('Tamagotchi', function(){
  var tom;

  beforeEach(function() {
    //Given
    tom = tamagotchi;
  });

  describe('- Hunger stat - ', function() {

    it('should be defined', function() {
      expect( tom ).toEqual( jasmine.any(Object) );
    });

    it('should have a hunger stat', function() {
      //Then
      expect( tom.getHunger() ).toEqual( jasmine.any(Number) );
    });

    it('should start with hunger at 10', function() {
      //Then
      expect( tom.getHunger() ).toBe( 10 );
    });

    it('hunger stat should be mutable', function() {
      //When
      tom.setHunger(5);

      //Then
      expect( tom.getHunger() ).toEqual( 5 );
    });

    it('should be able to eat', function() {
      //When
      tom.setHunger(5);
      tom.eat();

      //Then
      expect( tom.getHunger() ).toEqual( 8 );
    });

    it('should not be able to exceed a hunger state of 10', function() {
      //When
      tom.setHunger(8);
      tom.eat();

      //Then
      expect( tom.getHunger() ).toEqual( 10 );
    });
  });

  describe('- Fullness stat -', function() {
    it('should have a fullness stat', function() {
      //Then
      expect( tom.getFullness() ).toEqual( jasmine.any(Number) );
    });

    it('should start with fullness at 10', function() {
      //Then
      expect( tom.getFullness() ).toBe( 10 );
    });

    it('fullness stat should be mutable', function() {
      //When
      tom.setFullness(5);

      //Then
      expect( tom.getFullness() ).toEqual( 5 );
    });


    it('eating should make it more full', function() {
      //When
      tom.setFullness(5);
      tom.eat();

      //Then
      expect( tom.getFullness() ).toEqual( 8 );
    });

    it('should not be able to exceed a hunger state of 10', function() {
      //When
      tom.setFullness(8);
      tom.eat();

      //Then
      expect( tom.getFullness() ).toEqual( 10 );
    });
  });

});


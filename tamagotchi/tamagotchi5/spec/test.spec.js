describe('Tamagotchi Til You Puke', function(){
  var fuckwit;
  var ONE_MINUTE = 60000; // in miliseconds
  beforeEach(function(){
    jasmine.clock().install();
    fuckwit = Tamagotchi();
  });

  afterEach(function(){
    jasmine.clock().uninstall();
  });

  it('should exist', function() {
    expect(Tamagotchi()).toBeDefined();
  });

  it('should have a hunger stat', function() {
    expect(fuckwit.getStat('hunger')).toBe(50);
  });

  it('should have a fullness stat', function() {
    expect(fuckwit.getStat('fullness')).toBe(50);
  });

  describe('when feeding', function(){
    it('hunger should decrease', function() {
      fuckwit.feed(); // Act
      expect(fuckwit.getStat('hunger')).toBe(40); //Assert
    });

    it('fullness should increase', function() {
      fuckwit.feed(); // Act
      expect(fuckwit.getStat('fullness')).toBe(60); //Assert
    });
  });

  describe('when sharting', function() {
    it('should behave...', function() {
      fuckwit.shart();
      expect(fuckwit.getStat('fullness')).toBe(20);
    });
  });

  describe('changing needs over time', function() {
    it('hunger should increase over time', function() {
      expect(fuckwit.getStat('hunger')).toBe(50)
      jasmine.clock().tick(ONE_MINUTE);
      expect(fuckwit.getStat('hunger')).toBe(60);
    });

    it('hunger should not increase before the time limit', function() {
      expect(fuckwit.getStat('hunger')).toBe(50);
      jasmine.clock().tick(ONE_MINUTE - 1);
      expect(fuckwit.getStat('hunger')).toBe(50);
    });

    it('hunger should continue increasing as time passes', function() {
      expect(fuckwit.getStat('hunger')).toBe(50);
      jasmine.clock().tick(ONE_MINUTE * 5);
      expect(fuckwit.getStat('hunger')).toBe(100);
    });
  });

  describe('changing moods', function() {
    it('can have a contented mood', function() {
      expect(fuckwit.getMood()).toBe('😺')
    });

    it('can get hangry', function() {
      expect(fuckwit.getStat('hunger')).toBe(50);
      jasmine.clock().tick(ONE_MINUTE * 2);
      expect(fuckwit.getStat('hunger')).toBe(70);
      expect(fuckwit.getMood()).toBe('😾')
    });

    it('can get Ded', function() {
      expect(fuckwit.getStat('hunger')).toBe(50);
      jasmine.clock().tick(ONE_MINUTE * 5);
      expect(fuckwit.getStat('hunger')).toBe(100);
      expect(fuckwit.getMood()).toBe('💀')
    });
  });




});


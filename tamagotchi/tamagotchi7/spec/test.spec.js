describe('Setting up tests with Jasmine', function(){
  var phibbles;
  var ONE_MINUTE = 60000;

  beforeEach(function() {
    jasmine.clock().install();
    phibbles = Tamagotchi();
  });

  afterEach(function() {
    jasmine.clock().uninstall();
  });

  it('should be a thing', function() {
    expect(phibbles).toBeDefined();
  });

  it('should have a hunger stat of 50 by default', function() {
    expect(phibbles.hunger).toBe(50);
  });

  it('should have a fullness stat of 50 by default', function() {
    expect(phibbles.fullness).toBe(50);
  });

  describe('when feeding', function () {
    it('hunger should decrease by 10', function() {
      phibbles.feed();
      expect(phibbles.hunger).toBe(40);
    });

    it('fullness should increase by 10', function() {
      phibbles.feed();
      expect(phibbles.fullness).toBe(60);
    });
  });

  describe('when making poo', function () {
    it('should decrease fullness by 10', function () {
      phibbles.makeBoomBoom();
      expect(phibbles.fullness).toBe(40);
    });
  });

  describe('changing needs over time', function () {
    it('should increase hunger each minute', function () {
      jasmine.clock().tick(ONE_MINUTE);
      expect(phibbles.hunger).toBe(60);
    });

    it('should make sure that a minute has passed', function () {
      jasmine.clock().tick(ONE_MINUTE - 1);
      expect(phibbles.hunger).toBe(50);
    });
  });

  describe('changing moods', function() {
    it('should be 😺 by default', function() {
      expect(phibbles.getMood()).toBe('😺');
    });

    it('should be 😾 when hunger is 70 or above', function() {
      jasmine.clock().tick(ONE_MINUTE * 2);
      expect(phibbles.getMood()).toBe('😾');
    });

    it('should be 💀 when hunger is 70 or above', function() {
      jasmine.clock().tick(ONE_MINUTE * 5);
      expect(phibbles.getMood()).toBe('💀');
    });



  });
});

/*

TAMAGOTCHI CAN BE 😿
GIVEN I have a Tamagotchi
WHEN its hunger is above 70
THEN its mood will be 😿

TAMAGOTCHI CAN BE 💀
GIVEN I have a Tamagotchi
WHEN its hunger is 100
THEN its mood will be 💀

*/
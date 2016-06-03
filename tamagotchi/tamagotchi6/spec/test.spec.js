describe('Tamagotchi', function(){

  var CarlWinslow;
  var ONE_MINUTE = 60000;

  beforeEach(function() {
    jasmine.clock().install();
    CarlWinslow  = tamagotchi();
  });

  afterEach(function() {
    jasmine.clock().uninstall();
  });

  it('should be a thing', function() {
    expect(CarlWinslow).toBeDefined();
  });

  it('should have a hunger stat that defaults to 50', function() {

    expect(CarlWinslow.hunger).toBe(50);
  });

  it('should have a fullness stat that defaults to 50', function() {
    expect(CarlWinslow.fullness).toBe(50);
  });

  describe('when feeding', function () {
    it('hunger should decrease', function() {
      CarlWinslow.feed();
      expect(CarlWinslow.hunger).toBe(40);
    });

    it('fullness should increase', function() {
      CarlWinslow.feed();
      expect(CarlWinslow.fullness).toBe(60);
    });
  });

  describe('when pooping', function () {
    it('should decrease fullness', function () {
      CarlWinslow.makePoo();
      expect(CarlWinslow.fullness).toBe(40);
    });
  });

  describe('changing needs over time', function () {
    it('should increase hunger', function () {
      jasmine.clock().tick(ONE_MINUTE);
      expect(CarlWinslow.hunger).toBe(60);
    });
  });

  describe('handling mood changes', function() {
    it('should be meh by defalt', function() {
      expect(CarlWinslow.getMood()).toBe('😑')
    });

    it('should become hangry', function() {
      jasmine.clock().tick(ONE_MINUTE * 2);
      expect(CarlWinslow.getMood()).toBe('😾')
    });

    it('should be ded', function() {
      jasmine.clock().tick(ONE_MINUTE * 5);
      expect(CarlWinslow.hunger).toBe(100);
      expect(CarlWinslow.getMood()).toBe('💀')
    });
  });

});


describe('Game Timer', function() {
  var timer = (function(myTama){
    myTama = tamagotchi;

    setInterval(myTama.setHunger, 5000);
    return true;
  })();





  var myTimer;

  beforeEach(function() {
    myTimer = timer;
    jasmine.clock().install();
    spyOn(tamagotchi, "setHunger");
  });

  afterEach(function() {
    jasmine.clock().uninstall();
  });

  it('should be a thing', function() {
    expect( myTimer ).toBeDefined();
  });

  it('should not call any methods to start.', function() {
    expect( tamagotchi.setHunger ).not.toHaveBeenCalled();
  });

  it('should should call setHunger after 5 seconds.', function() {
    expect( tamagotchi.setHunger ).not.toHaveBeenCalled();

    jasmine.clock().tick(5001);

    expect( tamagotchi.setHunger ).toHaveBeenCalled();

  });

});
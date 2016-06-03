describe('Making decisions', function(){
  it('it should prompt for an answer', function() {
    expect(ask([])).toBe("Choose!");
  });

  it('should present some options', function() {
    expect(ask(["North"])).toBe("Exits are North. Choose!")
  });

  it('should present all options', function() {
    expect(ask(["North", "South", "East", "West"])).toBe("Exits are North, South, East, West. Choose!")
  });

  describe('giving the user options to choose from', function(){
    it('should map options to english', function() {
      expect(mapOptions(["North"])).toBe("North")
    });

    it('should map multiple options', function(){
      expect(mapOptions(["North", "South"])).toEqual("North, South");
    });

    it('should map up to four options', function() {
      expect(mapOptions(["North", "South", "East", "West"])).toEqual('North, South, East, West');
    });
  });
});


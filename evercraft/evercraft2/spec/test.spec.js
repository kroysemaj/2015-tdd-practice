describe('evercraft', function(){
  var bert = character();
  var fuckwad = character();

  it('should be true', function() {
    // Arrange - Given
    // Act - When
    // Assert - Then

    expect(bert).toBeDefined();
  });
  it('should have a name', function() {

    expect(bert.getAttr("name")).toBe('bert');
  });
  it('should be able to set a name', function() {
    bert.setAttr('name', "john");
    expect(bert.getAttr('name')).toBe('john');
  });

  it('should be able to set a name', function() {

    expect(bert.getAttr("alignment")).toBeDefined();
  });
  it('should be able to set an alignment', function() {
    bert.setAttr('alignment', "neutral")
    expect(bert.getAttr('alignment')).toBe('neutral');
  });
  it('should return an armor class', function() {

    expect(bert.getAttr("armorClass")).toBe(10);
  });
  it('should return a default 5 HP', function() {
    expect(bert.getAttr("hitPoints")).toBe(5);
  });

  it('should be able to attack', function() {

    expect(bert.attack(fuckwad, 15)).toBe(true);
  });


});


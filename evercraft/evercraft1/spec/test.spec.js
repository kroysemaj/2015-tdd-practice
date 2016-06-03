describe('EverCraft Kata', function(){
  var farty;
  beforeEach(function () {
    farty = Character(); //Arrange
  });

  describe('when creating a character', function() {
    it('should exist', function() {
      expect(Character()).toBeDefined();
    });

    it('should have a name', function() {
      expect(farty.getAttribute('name')).toBeDefined()
    });

    it('should be able to set a name', function() {
      farty.setAttribute('name', "Clarence Carter");
      expect(farty.getAttribute('name')).toBe('Clarence Carter');
    });

    it('should have an alignment', function() {
      expect(farty.getAttribute('alignment')).toBe('Good');
    });

    it('should be able to set an alignment', function() {
      farty.setAttribute('alignment', 'Evil');
      expect(farty.getAttribute('alignment')).toBe('Evil');
    });

    it('should have a default number of hit points', function() {
      expect(farty.getAttribute('hp')).toBe(5);
    });

    it('should have a default armor class', function() {
      expect(farty.getAttribute('ac')).toBe(10);
    });

    describe('with abilities', function() {
      it('should have abilities', function() {
        expect(farty.getAttribute('str')).toBeDefined();
        expect(farty.getAttribute('dex')).toBeDefined();
        expect(farty.getAttribute('con')).toBeDefined();
        expect(farty.getAttribute('wis')).toBeDefined();
        expect(farty.getAttribute('int')).toBeDefined();
        expect(farty.getAttribute('cha')).toBeDefined();
      });
      it('should be able to set abilities', function() {
        farty.setAttribute('str', 18);
        farty.setAttribute('dex', 15);
        farty.setAttribute('con', 12);
        farty.setAttribute('wis', 10);
        farty.setAttribute('int', 8);
        farty.setAttribute('cha', 11);
        expect(farty.getAttribute('str')).toBe(18);
        expect(farty.getAttribute('dex')).toBe(15);
        expect(farty.getAttribute('con')).toBe(12);
        expect(farty.getAttribute('wis')).toBe(10);
        expect(farty.getAttribute('int')).toBe(8);
        expect(farty.getAttribute('cha')).toBe(11);
      });
    });
  });

  describe('when fighting', function() {
    var sharty;
    beforeEach(function() {
      sharty = Character();
    });
    describe('with regular attacks', function() {
      it("should return true when attack roll is higher than the target's armor class", function() {
        expect(farty.attack(sharty, 15)).toBe(true);
      });
      it("should return false when attack roll is less than the targets armor class", function() {
        expect(farty.attack(sharty, 8)).toBe(false);
      });
      it('should reduce opponents hit points on a successful attack', function() {
        expect(sharty.getAttribute('hp')).toBe(5);
        farty.attack(sharty, 15);
        expect(sharty.getAttribute('hp')).toBe(4);
      });
    });
    describe('with critical attacks', function() {
      it('should cause extra damage on a critical attack', function() {
        expect(sharty.getAttribute('hp')).toBe(5);
        farty.attack(sharty, 20);
        expect(sharty.getAttribute('hp')).toBe(3);
      });
    });
  });
});

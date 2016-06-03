describe('Roman Numeral Converter', function(){
  describe('converting Arabic to Roman', function() {
    it('can convert 1', function() {
      expect(romanNumeralConverter(1)).toBe("I");
    });

    it('can convert 2', function() {
      expect(romanNumeralConverter(2)).toBe("II");
    });

    it('can convert 3', function() {
      expect(romanNumeralConverter(3)).toBe("III");
    });

    it('can convert 4', function() {
      expect(romanNumeralConverter(4)).toBe("IV");
    });

    it('can convert 5', function() {
      expect(romanNumeralConverter(5)).toBe("V");
    });

    it('can convert 6', function() {
      expect(romanNumeralConverter(6)).toBe("VI");
    });

    it('can convert 8', function() {
      expect(romanNumeralConverter(8)).toBe("VIII");
    });

    it('can convert 9', function() {
      expect(romanNumeralConverter(9)).toBe("IX");
    });

    it('can convert 10', function() {
      expect(romanNumeralConverter(10)).toBe("X");
    });

    it('can convert 11', function() {
      expect(romanNumeralConverter(11)).toBe("XI");
    });

    it('can convert 13', function() {
      expect(romanNumeralConverter(13)).toBe("XIII");
    });

    it('can convert 14', function() {
      expect(romanNumeralConverter(14)).toBe("XIV");
    });

    it('can convert 15', function() {
      expect(romanNumeralConverter(15)).toBe("XV");
    });

    it('can convert 18', function() {
      expect(romanNumeralConverter(15)).toBe("XV");
    });

    it('can convert 19', function() {
      expect(romanNumeralConverter(19)).toBe("XIX");
    });

    it('can convert 20', function() {
      expect(romanNumeralConverter(20)).toBe("XX");
    });

    it('can convert 28', function() {
      expect(romanNumeralConverter(28)).toBe("XXVIII");
    });

    it('can convert 30', function() {
      expect(romanNumeralConverter(30)).toBe("XXX");
    });

    it('can convert 40', function() {
      expect(romanNumeralConverter(40)).toBe("XL");
    });

    it('can convert 48', function() {
      expect(romanNumeralConverter(48)).toBe("XLVIII");
    });

    it('can convert 50', function() {
      expect(romanNumeralConverter(50)).toBe("L");
    });

    it('can convert 88', function() {
      expect(romanNumeralConverter(88)).toBe("LXXXVIII");
    });

    it('can convert 90', function() {
      expect(romanNumeralConverter(90)).toBe("XC");
    });

    it('can convert 98', function() {
      expect(romanNumeralConverter(98)).toBe("XCVIII");
    });

    it('can convert 100', function() {
      expect(romanNumeralConverter(100)).toBe("C");
    });

    it('can convert 388', function() {
      expect(romanNumeralConverter(388)).toBe("CCCLXXXVIII");
    });

    it('can convert 400', function() {
      expect(romanNumeralConverter(400)).toBe("CD");
    });

    it('can convert 500', function() {
      expect(romanNumeralConverter(500)).toBe("D");
    });

    it('can convert 900', function() {
      expect(romanNumeralConverter(900)).toBe("CM");
    });

    it('can convert 1000', function() {
      expect(romanNumeralConverter(1000)).toBe("M");
    });

    it('can convert 1888', function() {
      expect(romanNumeralConverter(1888)).toBe("MDCCCLXXXVIII");
    });

    it('can convert 2015', function() {
      expect(romanNumeralConverter(2015)).toBe("MMXV");
    });

    it('can convert 3999', function() {
      expect(romanNumeralConverter(3999)).toBe("MMMCMXCIX");
    });
  });

  describe('converting Roman to Arabic', function() {
    it('can convert I', function() {
      expect(romanNumeralConverter("I")).toBe(1);
    });

    xit('can convert II', function() {
      expect(romanNumeralConverter("II")).toBe(2);
    });

    xit('can convert III', function() {
      expect(romanNumeralConverter("III")).toBe(2);
    });

    xit('can convert IV', function() {
      expect(romanNumeralConverter("IV")).toBe(4);
    });

    xit('can convert V', function() {
      expect(romanNumeralConverter("V")).toBe(5);
    });

    xit('can convert VI', function() {
      expect(romanNumeralConverter("VI")).toBe(6);
    });

    xit('can convert "VIII"', function() {
      expect(romanNumeralConverter("VIII")).toBe(8);
    });

    xit('can convert "IX"', function() {
      expect(romanNumeralConverter("IX")).toBe(9);
    });

    xit('can convert X', function() {
      expect(romanNumeralConverter("X")).toBe(10);
    });

    xit('can convert XI', function() {
      expect(romanNumeralConverter("XI")).toBe(11);
    });

    xit('can convert "XIII"', function() {
      expect(romanNumeralConverter("XIII")).toBe(13);
    });

    xit('can convert "XIV"', function() {
      expect(romanNumeralConverter("XIV")).toBe(14);
    });

    xit('can convert "XV"', function() {
      expect(romanNumeralConverter("XV")).toBe(15);
    });

    xit('can convert "XVIII"', function() {
      expect(romanNumeralConverter("XVIII")).toBe(18);
    });

    xit('can convert "XIX"', function() {
      expect(romanNumeralConverter("XIX")).toBe(19);
    });

    xit('can convert "XX"', function() {
      expect(romanNumeralConverter("XX")).toBe(20);
    });

    xit('can convert "XL"', function() {
      expect(romanNumeralConverter("XL")).toBe(40);
    });

    xit('can convert "L"', function() {
      expect(romanNumeralConverter("L")).toBe(50);
    });

    xit('can convert "XC"', function() {
      expect(romanNumeralConverter("XC")).toBe(90);
    });

    xit('can convert "C"', function() {
      expect(romanNumeralConverter("C")).toBe(100);
    });

    xit('can convert "CD"', function() {
      expect(romanNumeralConverter("CD")).toBe(400);
    });

    xit('can convert "D"', function() {
      expect(romanNumeralConverter("D")).toBe(500);
    });

    xit('can convert "CM"', function() {
      expect(romanNumeralConverter("CM")).toBe(900);
    });

    xit('can convert "M"', function() {
      expect(romanNumeralConverter("M")).toBe("M");
    });

    xit('can convert "MDCCCLXXXVIII"', function() {
      expect(romanNumeralConverter("MDCCCLXXXVIII")).toBe(1888);
    });

    xit('can convert "MMXV"', function() {
      expect(romanNumeralConverter("MMXV")).toBe(2015);
    });

    xit('can convert "MMMCMXCIX"', function() {
      expect(romanNumeralConverter("MMMCMXCIX")).toBe(3999);
    });
  });
});


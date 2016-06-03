describe('LCD Numbers Converter', function(){
  describe(' - deciphers single digits', function() {
    it('- should decipher 0', function() {
      expect(decipher(0)).toEqual(['._.','|.|','|_|']);
    });

    it('- should decipher 1', function() {
      expect(decipher(1)).toEqual(['...','..|','..|']);
    });

    it('- should decipher 2', function() {
      expect(decipher(2)).toEqual(['._.','._|','|_.']);
    });

    it('- should decipher 3', function() {
      expect(decipher(3)).toEqual(['._.','._|','._|']);
    });

    it('- should decipher 4', function() {
      expect(decipher(4)).toEqual(['...','|_|','..|']);
    });

    it('- should decipher 5', function() {
      expect(decipher(5)).toEqual(['._.','|_.','._|']);
    });

    it('- should decipher 6', function() {
      expect(decipher(6)).toEqual(['._.','|_.','|_|']);
    });

    it('- should decipher 7', function() {
      expect(decipher(7)).toEqual(['._.','..|','..|']);
    });

    it('- should decipher 8', function() {
      expect(decipher(8)).toEqual(['._.','|_|','|_|']);
    });

    it('- should decipher 9', function() {
      expect(decipher(9)).toEqual(['._.','|_|','..|']);
    });
  });

  describe('- deciphers multiple digits', function() {
    it('should decipher 10', function() {
      expect(decipher(10)).toEqual(
        [
          '... ._. ',
          '..| |.| ',
          '..| |_| ',
        ])
    });

    it('should decipher 10', function() {
      expect(decipher(918)).toEqual(
        [
          '._. ... ._. ',
          '|_| ..| |_| ',
          '..| ..| |_| ',
        ])
    });
  });


});


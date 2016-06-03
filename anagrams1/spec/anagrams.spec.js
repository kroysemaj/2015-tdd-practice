describe('Finding all possible anagrams', function(){
  it('should return the word itself', function() {
    expect(anagramify('ab')).toBe('ab');
  });

  it('should return the word reversed', function() {
    expect(reverse('abc')).toBe('cba');
  });

  it('should move the first character through each position of the word', function() {
    expect(charFlipper('abc')).toBe(['abc', 'bac', 'bca']);
  });
});


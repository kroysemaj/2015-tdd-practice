
var romanGlyphs = [
  [1000, "M"],
  [900, "CM"],
  [500, "D"],
  [400, "CD"],
  [100, "C"],
  [90, "XC"],
  [50, "L"],
  [40, "XL"],
  [10, "X"],
  [9, "IX"],
  [5, "V"],
  [4, "IV"],
  [1, "I"]
];

function romanNumeralConverter(number){
  var result = "";

  romanGlyphs.forEach(function(glyphPair){
    var arabicNumber = glyphPair[0];
    var romanGlyph = glyphPair[1];
    while(number >= arabicNumber) {
      result += romanGlyph;
      number -= arabicNumber;
    }
  });

  return result;
}
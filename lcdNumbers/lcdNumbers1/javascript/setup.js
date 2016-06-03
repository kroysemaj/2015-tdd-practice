
var lcds = {
  0: ['._.', '|.|', '|_|'],
  1: ['...', '..|', '..|'],
  2: ['._.', '._|', '|_.'],
  3: ['._.', '._|', '._|'],
  4: ['...', '|_|', '..|'],
  5: ['._.', '|_.', '._|'],
  6: ['._.', '|_.', '|_|'],
  7: ['._.', '..|', '..|'],
  8: ['._.', '|_|', '|_|'],
  9: ['._.', '|_|', '..|'],
};

function decipher(number){
  var numberAsStr = number.toString();
  if(numberAsStr.length === 1){
    return decipherSingleDigit(number);
  }

  return buildMultidigit(numberAsStr);
}

function buildMultidigit(numberAsStr){
  var result = ['', '', ''];
  var numberArr = numberAsStr.split('');
  var digitArr = [];

  numberArr.forEach(function(digit){
    digitArr = decipherSingleDigit(digit);
    digitArr.forEach(function(line, index) {
      result[index] += line + " ";
    });
  });

  return result;
}

function decipherSingleDigit(number){
  return lcds[number];
}


// Your task is to create an LCD string representation of an
// integer value using a 3x3 grid of space, underscore, and
// pipe characters for each digit. Each digit is shown below
// (using a dot instead of a space)

// ._.   ...   ._.   ._.   ...   ._.
// |.|   ..|   ._|   ._|   |_|   |_.
// |_|   ..|   |_.   ._|   ..|   ._|

// ._.   ._.   ._.   ._.
// |_.   ..|   |_|   |_|
// |_|   ..|   |_|   ..|


// Example: 910

// ._. ... ._.
// |_| ..| |.|
// ..| ..| |_|


var digits =  [
                [' _ ',
                 '| |',
                 '|_|'],

                ['   ',
                 '  |',
                 '  |'],

                [' _ ',
                 ' _|',
                 '|_ '],

                [' _ ',
                 ' _|',
                 ' _|'],

                ['   ',
                 '|_|',
                 '  |'],

                [' _ ',
                 '|_ ',
                 ' _|'],

              ];


function printLcd(number){
  number.forEach(function(line){
    console.log(line);
  });
}

function convertToNumericalArray(numbers){
  var numbersAsStringsArray = numbers.toString().split('');

  return numbersAsStringsArray.map(function(number){
    return parseInt(number);
  });
}

function buildLcdString(arrayOfNumbers){
  var finalLcdString = ['', '', ''];

  arrayOfNumbers.forEach(function(number){
    for(var i = 0; i < finalLcdString.length; i++){
      finalLcdString[i] += digits[number][i];
    }
  });

  return finalLcdString;
}

function convertLcdNumber(number) {
  var numbersArray = convertToNumericalArray(number);
  var convertedNumber = buildLcdString(numbersArray);
  printLcd(convertedNumber);
}

convertLcdNumber(123450);


// lcd(910)
//  _      _
// |_|  | | |
//   |  | |_|

// lcd(0)
// ._.
// |.|
// |_|












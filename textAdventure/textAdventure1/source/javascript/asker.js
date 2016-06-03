function ask(options){
  var exits = "Exits are " + mapOptions(options) + ". "
  var msg = "Choose!"
  if(options.length === 0){
    exits = ""
  }
  return exits + msg;
}

function mapOptions(options){
  var mappedOption = "";
    while(options.length > 1) {
      mappedOption += options[0]+ ', ';
      options.shift();
    }
    mappedOption += options[0]
  return mappedOption;
}
function character() {
  var info = {
    name: 'bert',
    alignment: 'good',
    armorClass: 10,
    hitPoints: 5
  };

  function getAttr(attribute) {
    return info[attribute];
  }
  function setAttr(attribute, value){
    info[attribute] = value;
  }

  return {
    getAttr: getAttr,
    setAttr: setAttr
  };
}
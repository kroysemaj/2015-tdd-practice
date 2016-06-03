function Character() {
  var info = {
    name: "Bob",
    alignment: "Good",
    hp: 5,
    ac: 10,
    abilities: {
      str: 10,
      dex: 10,
      con: 10,
      wis: 10,
      int: 10,
      cha: 10
    }
  };

  function setAttribute(attr, value){
    if(info.abilities.hasOwnProperty(attr)){
      info.abilities[attr] = value;
    }
    info[attr] = value;
  }

  function getAttribute(attr){
    if(info.abilities.hasOwnProperty(attr)){
      return info.abilities[attr];
    }
    return info[attr];
  }

  function attack(target, roll) {
    if(roll === 20){
      applyDamage(target, 2);
      return true;
    }
    if(roll >= target.getAttribute('ac')){
      applyDamage(target)
      return true;
    }
    return false;
  }

  function applyDamage(victim, modifier) {
    var BASE_DAMANGE = 1;
    var multiplier = modifier || 1;
    var totalDamage = BASE_DAMANGE * multiplier;

    victim.setAttribute('hp', victim.getAttribute('hp') - totalDamage);
  }

  return {
    getAttribute: getAttribute,
    setAttribute: setAttribute,
    attack: attack
  };
}
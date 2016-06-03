var tamagotchi = (function (){

  var hunger = 10;
  var fullness = 10

  function getHunger(){
    return hunger;
  }

  function setHunger(hungerVal){
    hunger = hungerVal;
  }

  function eat(){
    hunger += 3;
    fullness += 3;

    if(hunger > 10){
      hunger = 10;
    }

    if (fullness > 10) {
      fullness = 10;
    }
  }

  function getFullness() {
    return fullness;
  }

  function setFullness(fullnessVal) {
    fullness = fullnessVal;
  }

  return {
    getHunger: getHunger,
    setHunger: setHunger,
    eat: eat,
    getFullness: getFullness,
    setFullness: setFullness
  };
})();
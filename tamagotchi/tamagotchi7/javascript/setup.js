function Tamagotchi(){
  var tamagotchi = {
    hunger: 50,
    fullness: 50,
    feed: _feed,
    makeBoomBoom: _makeBoomBoom,
    getMood: _getMood
  }

  function _feed(){
    _decreaseStat('hunger');
    _increaseStat('fullness');
  }

  function _makeBoomBoom(){
    _decreaseStat('fullness');
  }

  function _increaseStat(stat) {
    tamagotchi[stat] += 10;
  }

  function _decreaseStat(stat) {
    tamagotchi[stat] -= 10;
  }

  function init() {
    setInterval(function () {
      _increaseStat('hunger');
    }, 60000);
  }

  function _getMood() {
    if (tamagotchi.hunger >= 100) {
      return '💀'
    }
    if(tamagotchi.hunger >= 70){
      return '😾';
    }
    return '😺';
  }

  init();
  return tamagotchi;
}
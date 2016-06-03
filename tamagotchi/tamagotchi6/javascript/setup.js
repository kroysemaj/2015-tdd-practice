function tamagotchi(){
  var _tamagotchi = {
    hunger: 50,
    fullness: 50,
    feed: function(){
      _decreaseStat('hunger');
      _increaseStat('fullness');
    },
    makePoo: function() {
      _decreaseStat('fullness');
    },
    getMood: function(){
      if(this.hunger >= 100){
        return '💀';
      }
      if(this.hunger >= 70){
        return '😾'
      }
      return '😑';
    }
  }

  function _increaseStat(stat) {
    _tamagotchi[stat] += 10;
  }

  function _decreaseStat(stat) {
    _tamagotchi[stat] -= 10;
  }

  function init() {
    setInterval(function () {
     _increaseStat('hunger');
    }, 60000);
  }

  init();
  return _tamagotchi;
}
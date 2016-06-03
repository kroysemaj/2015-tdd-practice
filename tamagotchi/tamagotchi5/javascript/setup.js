function Tamagotchi(){
  var stats = {
    hunger: 50,
    fullness: 50,


  }

  function feed(){
    stats.hunger -= 10;
    stats.fullness += 10;
  }

  function getStat(stat) {
    return stats[stat];
  }

  function shart(){
    stats.fullness -= 30;
  }

  function getMood(){
    if(stats.hunger >= 100){
      return '💀'
    }
    if(stats.hunger >= 70){
      return '😾'
    }
    return '😺';
  }

  function birf(){
    setInterval(function(){
      stats.hunger += 10;
    }, 60000)
  }

  birf();


  return {
    getStat: getStat,
    feed: feed,
    shart: shart,
    getMood: getMood
  };
}
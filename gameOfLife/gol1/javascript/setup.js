var neighbors = {
  2: true,
  3: true
}

var position = {
  getCoordinates: function(cell) {
    return cell.coordinates;
  }
}

function gameOfLife(numberOfNeighbors){
  return { living: neighbors[numberOfNeighbors] || false };
}

function Cell(position, currentState) {
  this.position = position;
  this.currentState = currentState;
}


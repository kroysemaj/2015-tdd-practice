describe('Setting up tests with Jasmine', function(){
  describe('Cell logic', function() {
    it('Live cell dies with one neighbor', function() {
      //Given
      var neighbors = { count: 1 };

      // Then
      expect(gameOfLife(neighbors.count)).toEqual({ living:false });
    });

    it('Live cell live with two neighbors', function() {
      //Given
      var neighbors = { count: 2 };

      // Then
      expect(gameOfLife(neighbors.count)).toEqual({ living:true });
    });

    it('Live cell live with three neighbors', function() {
      //Given
      var neighbors = { count: 3 };

      // Then
      expect(gameOfLife(neighbors.count)).toEqual({ living:true });
    });

    it('Live cell dies with four neighbors', function() {
      //Given
      var neighbors = { count: 4 };

      // Then
      expect(gameOfLife(neighbors.count)).toEqual({ living:false });
    });

    it('Live cell dies with five neighbors', function() {
      //Given
      var neighbors = { count: 5 };

      // Then
      expect(gameOfLife(neighbors.count)).toEqual({ living:false });
    });

    it('Dead cell lives with exactly 3 neighbors', function() {
      //Given
      var neighbors = { count: 3 };

      // Then
      expect(gameOfLife(neighbors.count)).toEqual({ living:true });
    });
  });
  describe("Cell's Position logic", function() {
    it('should know its own position', function() {
      var cell = {
        coordinates: {
         x: 0,
         y: 0
        }
      };
      expect(position.getCoordinates(cell)).toEqual(cell.coordinates);
    });
  });
  describe("Cell's neighbor logic", function() {
    it('should make a correct Cell object', function() {
      var cell = new Cell({
         x: 0,
         y: 0
        }, true);
      expect(cell).toEqual(cell);
    });
    it('should return any list of neighbors', function() {
      var cell = new Cell({
         x: 0,
         y: 0
        }, true);

      expect(cell.getNeighbors).toEqual(jasmine.any("Array"));
    });
  });
});


define(['constants'], function(Constants) {
   var Model = function() {
      var self = this;
      this.initialize = function() {
         self.grid = [];
         for (var x=0; x<Constants.NUMBER_OF_CELLS_WIDTH; x++) {
            self.grid.push([]);

            for (var y=0; y<Constants.NUMBER_OF_CELLS_HEIGHT; y++) {
               self.grid[x].push(Math.floor(Math.random() * 100) % 2);
            }
         }
      };

      this.update = function() {
         self.grid = updateGrid();
      };

      var updateGrid = function() {
         var newGrid = [];
         for (var x=0; x<Constants.NUMBER_OF_CELLS_WIDTH; x++) {
            newGrid.push([]);

            for (var y=0; y<Constants.NUMBER_OF_CELLS_HEIGHT; y++) {
               newGrid[x].push(isAlive(x, y));
            }
         }
         return newGrid;
      };

      var isAlive = function(x, y) {
         var isAlive = true;
         var numberOfNeighbors = findNumberOfNeighbors(x, y);
         if (numberOfNeighbors < 2) {
            isAlive = false;
         } else if (numberOfNeighbors > 3) {
            isAlive = false;
         }
         return isAlive;
      };

      var findNumberOfNeighbors = function(x, y) {
         var neighbors = 0;
         if (isAliveAt(x - 1, y - 1)) {
            neighbors++;
         }
         if (isAliveAt(x, y - 1)) {
            neighbors++;
         }
         if (isAliveAt(x + 1, y - 1)) {
            neighbors++;
         }
         if (isAliveAt(x - 1, y)) {
            neighbors++;
         }
         if (isAliveAt(x + 1, y)) {
            neighbors++;
         }
         if (isAliveAt(x - 1, y + 1)) {
            neighbors++;
         }
         if (isAliveAt(x, y + 1)) {
            neighbors++;
         }
         if (isAliveAt(x + 1, y + 1)) {
            neighbors++;
         }
         return neighbors;
      };

      var isAliveAt = function(x, y) {
         try {
            var isAlive;
            if (x < 0) {
               isAlive = false;
            } else if (x >= self.grid.length) {
               isAlive = false;
            } else if (y < 0) {
               isAlive = false;
            } else if (y >= self.grid[x].length) {
               isAlive = false;
            } else {
               isAlive = self.grid[x][y];
            }
         } catch (e) {
            alert('error reading from ' + x + ', ' + y + ': ' + e);
         }
         return isAlive;
      }
   };
   return Model;
});

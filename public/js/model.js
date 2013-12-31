define(['constants'], function(Constants) {
   var Model = function() {
      var self = this;

      var updateGrid = function(getValue) {
         var newGrid = [];
         for (var x=0; x<Constants.NUMBER_OF_CELLS_WIDTH; x++) {
            newGrid.push([]);

            for (var y=0; y<Constants.NUMBER_OF_CELLS_HEIGHT; y++) {
               newGrid[x].push(getValue(x, y));
            }
         }
         return newGrid;
      };

      self.initialize = function() {
         self.grid = updateGrid(function() {
            return Math.floor(Math.random() * 100) % 2;
         });
      };

      self.update = function() {
         self.grid = updateGrid(isAlive);
      };

      var isAlive = function(x, y) {
         var cellIsAlive = true;
         var neighbors = numberOfNeighbors(x, y);
         if (neighbors < 2) {
            cellIsAlive = false;
         } else if (neighbors > 3) {
            cellIsAlive = false;
         }
         return cellIsAlive;
      };

      var numberOfNeighbors = function(x, y) {
         var neighbors = 0;
         if (cellPresentAt(x - 1, y - 1)) {
            neighbors++;
         }
         if (cellPresentAt(x, y - 1)) {
            neighbors++;
         }
         if (cellPresentAt(x + 1, y - 1)) {
            neighbors++;
         }
         if (cellPresentAt(x - 1, y)) {
            neighbors++;
         }
         if (cellPresentAt(x + 1, y)) {
            neighbors++;
         }
         if (cellPresentAt(x - 1, y + 1)) {
            neighbors++;
         }
         if (cellPresentAt(x, y + 1)) {
            neighbors++;
         }
         if (cellPresentAt(x + 1, y + 1)) {
            neighbors++;
         }
         return neighbors;
      };

      var cellPresentAt = function(x, y) {
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

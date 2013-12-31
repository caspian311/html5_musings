define(['constants'], function(Constants) {
   var Model = function() {
      var self = this;

      var _updateGrid = function(getValue) {
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
         self.grid = _updateGrid(function() {
            return Math.floor(Math.random() * 100) % 2;
         });
      };

      self.update = function() {
         self.grid = _updateGrid(_isAlive);
      };

      var _isAlive = function(x, y) {
         var neighbors = _numberOfNeighbors(x, y);

         var cellIsAlive = true;
         if (neighbors < 2) {
            cellIsAlive = false;
         } else if (neighbors > 3) {
            cellIsAlive = false;
         }
         return cellIsAlive;
      };

      var _numberOfNeighbors = function(x, y) {
         var neighbors = 0;
         if (_cellPresentAt(x - 1, y - 1)) {
            neighbors++;
         }
         if (_cellPresentAt(x, y - 1)) {
            neighbors++;
         }
         if (_cellPresentAt(x + 1, y - 1)) {
            neighbors++;
         }
         if (_cellPresentAt(x - 1, y)) {
            neighbors++;
         }
         if (_cellPresentAt(x + 1, y)) {
            neighbors++;
         }
         if (_cellPresentAt(x - 1, y + 1)) {
            neighbors++;
         }
         if (_cellPresentAt(x, y + 1)) {
            neighbors++;
         }
         if (_cellPresentAt(x + 1, y + 1)) {
            neighbors++;
         }
         return neighbors;
      };

      var _cellPresentAt = function(x, y) {
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

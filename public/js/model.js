define(['constants'], function(Constants) {
   var Model = function() {
      this.initialize = function() {
         this.grid = [];
      };

      this.update = function() {
         this.grid = updateGrid();
      };

      var updateGrid = function() {
         var newGrid = [];
         for (var x=0; x<Constants.NUMBER_OF_CELLS_WIDTH; x++) {
            newGrid.push([]);

            for (var y=0; y<Constants.NUMBER_OF_CELLS_WIDTH; y++) {
               newGrid[x].push(isAlive(x, y));
            }
         }
         return newGrid;
      };

      var isAlive = function(x, y) {
         return false;
      };
   };
   return Model;
});

define(['constants'], function(Constants) {
   var Model = function() {
      this.initialize = function() {
         this.grid = [];
         for (var x=0; x<Constants.NUMBER_OF_CELLS_WIDTH; x++) {
            this.grid[x] = [];
            for (var y=0; y<Constants.NUMBER_OF_CELLS_WIDTH; y++) {
               this.grid[x].push(false);
            }
         }
      };

      this.update = function() {};
   };
   return Model;
});

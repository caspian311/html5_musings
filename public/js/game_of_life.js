define(['constants', 'model'], function(Constants, Model) {
   var GameOfLife = function() {
      var _model = new Model();

      this.initialize = function() {
         _model.initialize();
      }

      this.update = function() {
         _model.update();
      }

      this.draw = function(canvas) {
         canvas.fillStyle = "rgb(0,0,0)";
         canvas.fillRect(0, 0, Constants.SCREEN_WIDTH, Constants.SCREEN_HEIGHT);

         for (var x=0; x<_model.grid.length; x++) {
            for (var y=0; y<_model.grid[x].length; y++) {
               _renderCell(x, y, grid[x][y]);
            }
         }
      };

      var _renderCell = function(x, y, isAlive) {
      };

      this.initialize();
   };

   return GameOfLife;
});

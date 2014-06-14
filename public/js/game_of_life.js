define(['constants', 'model'], function(Constants, Model) {
   var GameOfLife = function() {
      var _model = new Model();

      this.initialize = function() {
         _model.initialize();
      }

      this.update = function() {
         _model.update();
      }

      this.debug = function() {
         var output = '';
         for (var x=0; x<_model.grid.length; x++) {
            for (var y=0; y<_model.grid[x].length; y++) {
               output += _model.grid[x][y] ? '*' : ' ';
            }
            output += '\n';
         }
         console.log(output);
      }

      this.draw = function(canvas) {
         _resetBoard(canvas);

         _drawGrid(canvas);
      };

      var _resetBoard = function(canvas) {
         canvas.fillStyle = Constants.WHITE;

         canvas.rect(0, 0, Constants.SCREEN_WIDTH, Constants.SCREEN_HEIGHT);
         canvas.fill();
      }

      var _drawGrid = function(canvas) {
         for (var x=0; x<_model.grid.length; x++) {
            for (var y=0; y<_model.grid[x].length; y++) {
               if (_model.grid[x][y]) {
                  _renderCell(canvas, y, x);
               }
            }
         }
      }

      var _renderCell = function(canvas, x, y) {
         var topLeftX = Constants.WIDTH_OF_CELL * x;
         var topLeftY = Constants.HEIGHT_OF_CELL * y;
         var bottomRightX = Constants.WIDTH_OF_CELL;
         var bottomRightY = Constants.HEIGHT_OF_CELL;

         canvas.fillStyle = Constants.BLACK;
         canvas.fillRect(topLeftX, topLeftY, bottomRightX, bottomRightY);

         canvas.strokeStyle = Constants.RED;
         canvas.strokeRect(topLeftX, topLeftY, bottomRightX, bottomRightY);
      };
   };

   return GameOfLife;
});

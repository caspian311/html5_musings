define(['constants'], function(Constants) {
   var Shapes = function() {
      this.initialize = function() {
         self.x = 0
      }

      this.update = function() {
         self.x += Constants.WIDTH_OF_CELL;
      }

      this.draw = function(canvas) {
         canvas.fillStyle = 'rgb(0, 0, 0)';
         canvas.fillRect(x, x, Constants.WIDTH_OF_CELL, Constants.HEIGHT_OF_CELL);
      }
   }

   return Shapes;
});

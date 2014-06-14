define(['constants'], function(Constants) {
   var Shapes = function() {
      this.initialize = function() {
      }

      this.update = function() {
      }

      this.draw = function(canvas) {
         canvas.fillStyle = 'rgb(0, 0, 0)';
         canvas.fillRect(0, 0, 10, 10);

         canvas.fillRect(10, 10, 10, 10);
      }
   }

   return Shapes;
});

define(function() {
   var Target = function() {
      var targetPosition, size = 10;
      var self = this;
      self.initialize = function() {};

      self.draw = function(canvas) {
         if (targetPosition) {
            canvas.beginPath();
            canvas.arc(targetPosition.x, targetPosition.y, size, 2 * Math.PI, false);
            canvas.lineWidth = 2;
            canvas.strokeStyle = '#fff';
            canvas.stroke();
            canvas.closePath();
         }
      };

      self.update = function(characterCode, mousePosition) {
         targetPosition = { 
            x: mousePosition.x - size, 
            y: mousePosition.y - size 
         };
      };
   };

   return Target;
});

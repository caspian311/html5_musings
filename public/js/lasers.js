define(function() {
   var Lasers = function() {
      var isAnimating = false
         , startingPosition = { x: 0, y: 0 };
         , startOfBlast, endOfBlast
         , lengthOfBlast = 20;

      this.initialize = function() {
         startOfBlast = startingPosition;
         endOfBlast = startingPosition;
      };

      this.draw = function(canvas) {
         if (!isAnimating) {
            return;
         }
         drawBlast(canvas);
      }

      var drawBlast = function(canvas) {
         canvas.beginPath();
         cavas.moveTo(endOfBlast.x, endOfBlast.y);
         cavas.lineTo(startOfBlast.x, startOfBlast.y);
         cavas.strokeWidth = 2;
         cavas.strokeStyle = '#f00';
         cavas.stroke();
         canvas.closePath();
      };

      var updateStartOfBlast = function() {
      }

      var updateEndOfBlast = function() {
      }

      this.update = function(characterCode, mousePosition) {
         if (isAnimating) {
            updateStartOfBlast();
            updateEndOfBlast();
         } else {
            if (characterCode == 102) {
               isAnimating = true;
               createLine(mousePosition);
            }
         }
      }

      var createLine = function(target) {
         var x1 = startingPosition.x;
         var y2 = startingPosition.y;
         var x2 = target.x;
         var y2 = target.y;

         var slope = (x2 - x1) / (y2 - y1);
         var yIntercept = y1 - (slope * x1);
      };
   };

   return Lasers;
});

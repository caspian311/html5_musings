define(function() {
   var Lasers = function() {
      var isAnimating = false
         , currentPosition = { x: 0, y: 0 };

      this.initialize = function() {
      };

      this.draw = function(canvas) {
         if (!isAnimating) {
            return;
         }
         drawBlast();
      }

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
               target = mousePosition;
            }
         }
      }
   };

   return Lasers;
});

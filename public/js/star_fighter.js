define(function() {
   var StarFighter = function() {
      var IDLE = 1, SHOOTING = 2;
      var action, defaultAction = IDLE;

      this.initialize = function() {
         action = defaultAction;
      };

      var drawIdle = function() {
      };

      var drawShooting = function() {
      };

      this.draw = function() {
         switch (action) {
            case IDLE:
               drawIdle();
               break;
            case SHOOTING:
               drawShooting();
               break;
            default:
               break;
         }
         initialize();
      }

      this.update = function(characterCode) {
         action = mapAction(characterCode);
      }
   };

   return StarFighter;
});

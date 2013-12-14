define(function() {
   var Controller = function(engine) {
      var SPACE = 32, d = 100, r = 114

      var mapKeyPress = function(event) {
         switch (event.charCode) {
            case SPACE:
               engine.toggle_running()
               break;
            case d:
               engine.toggle_debugging()
               break;
            case r:
               engine.reset();
               break;
            default:
               engine.controlPressed(event.charCode);
               break;
         }
      };

      var updateMousePosition = function(event) {
         engine.updateMousePosition(event.pageX, event.pageY);
      };

      $(window.document).keypress(mapKeyPress);
      $(window.document).mousemove(updateMousePosition);
   };
   return Controller;
});

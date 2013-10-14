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

      $(window.document).keypress(mapKeyPress);
   };
   return Controller;
});

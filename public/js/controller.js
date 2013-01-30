(function() {
   var Controller = function(engine) {
      $(window.document).keypress(function(event) {
         if (event.charCode == 32) {
            engine.toggle_running()
         } else if (event.charCode == 100) {
            engine.toggle_debugging()
         } else if (event.charCode == 114) {
            engine.reset()
         } else {
            console.log("keycode: '" + event.keyCode + "'")
         }
      })
   }
   window.Controller = Controller
})()

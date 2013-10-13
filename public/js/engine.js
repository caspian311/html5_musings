define(function() {
   var Engine = function(canvas) {
      var _canvas = canvas
      var _items_to_render = []
      var _is_running = true
      var _is_debugging = false

      this.main_loop = function() {
         _items_to_render.map(function(renderable) {
            if (_is_running) {
               renderable.update();
               renderable.draw(_canvas);
               if (_is_debugging) {
                  renderable.debug()
               }
            }
         });
      };

      this.add = function(renderable) {
         _items_to_render.push(renderable);
      };

      this.reset = function() {
         _items_to_render.map(function(renderable) {
            renderable.initialize();
            renderable.draw(_canvas);
         })
      };

      this.toggle_debugging = function() {
         _is_debugging = _is_debugging ? false : true;
      };

      this.toggle_running = function() {
         _is_running = _is_running ? false : true;
      };
   };

   return Engine;
});

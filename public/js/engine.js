define(function() {
   var Engine = function(canvas) {
      var _canvas = canvas;
      var _items_to_render = [];
      var _is_running = true;
      var _is_debugging = false;
      var self = this;

      self.main_loop = function() {
         _items_to_render.map(function(renderable) {
            if (_is_running) {
               renderable.update(self.lastCharacterCode);
               renderable.draw(_canvas);

               if (_is_debugging) {
                  renderable.debug();
               }
            }
         });
      };

      self.add = function(renderable) {
         _items_to_render.push(renderable);
      };

      self.reset = function() {
         _items_to_render.map(function(renderable) {
            renderable.initialize();
            renderable.draw(_canvas);
         })
      };

      self.toggle_debugging = function() {
         _is_debugging = _is_debugging ? false : true;
      };

      self.toggle_running = function() {
         _is_running = _is_running ? false : true;
      };

      self.controlPressed = function(characterCode) {
         self.lastCharacterCode = characterCode;
      };
   };

   return Engine;
});

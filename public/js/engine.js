define(function() {
   var Engine = function(canvas) {
      var _canvas = canvas;
      var _items_to_render = [];
      var _is_running = true;
      var _is_debugging = false;
      var _lastCharacterCode, _mousePosition;
      var self = this;

      self.mainLoop = function() {
         _items_to_render.map(function(renderable) {
            if (_is_running) {
               if (renderable.update) {
                  renderable.update(_lastCharacterCode, _mousePosition);
               }
               renderable.draw(_canvas);

               if (_is_debugging && renderable.debug) {
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

      self.initialize = function() {
         _items_to_render.map(function(renderable) {
            renderable.initialize();
         });
      }

      self.toggle_debugging = function() {
         _is_debugging = _is_debugging ? false : true;
      };

      self.toggle_running = function() {
         _is_running = _is_running ? false : true;
         console.log(_is_running ? 'Resume' : 'Pause');
      };

      self.controlPressed = function(characterCode) {
         _lastCharacterCode = characterCode;
      };

      self.updateMousePosition = function(x, y) {
         _mousePosition = { x: x, y: y };
      }
   };

   return Engine;
});

(function() {
   var Engine = function(canvas) {
      var _canvas = canvas
      var _items_to_render = []
      var _is_running = true
      var _is_debugging = false

      var _main_loop = function() {
         _items_to_render.map(function(renderable) {
            if (_is_running) {
               renderable.update()
               renderable.draw(_canvas)
               if (_is_debugging) {
                  renderable.debug()
               }
            }
         })
      }

      var _add = function(renderable) {
         _items_to_render.push(renderable)
      }

      var _reset = function() {
         _items_to_render.map(function(renderable) {
            renderable.initialize()
            renderable.draw(_canvas)
         })
      }

      return {
         main_loop: _main_loop,
         add: _add,
         reset: _reset,
         toggle_debugging: function() {
            _is_debugging = _is_debugging ? false : true
         },
         toggle_running: function() {
            _is_running = _is_running ? false : true
         }
      }
   }

   window.Engine = Engine
})()

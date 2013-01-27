(function() {
   var Constants = {
      FOV: 250,
      SCREEN_WIDTH: 600,
      SCREEN_HEIGHT: 400,
      NUM_POINTS: 1000
   }
   Constants.HALF_WIDTH = Constants.SCREEN_WIDTH / 2
   Constants.HALF_HEIGHT = Constants.SCREEN_HEIGHT / 2

   var Engine = function(canvas) {
      var _canvas = canvas
      var _items_to_render = []
      var _is_running = true
      var _is_debugging = false

      $(window.document).keypress(function(event) {
         if (event.keyCode == 32) {
            _is_running = _is_running ? false : true
         } else if (event.keyCode == 100) {
            _is_debugging = _is_debugging ? false : true
         } else if (event.keyCode == 114) {
            _items_to_render.map(function(renderable) {
               renderable.initialize()
               renderable.draw(_canvas)
            })
         } else {
            console.log("keycode: '" + event.keyCode + "'")
         }
      })

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

      return {
         main_loop: _main_loop,
         add: _add
      }
   }

   var StarField = function() {
      var _points = []

      var _initialize = function() {
         _points = []
         for (i=0; i<Constants.NUM_POINTS; i++) {
            var point = new Point((Math.random()*400)-200, (Math.random()*400)-200 , (Math.random()*400)-200)
            _points.push(point); 
         }
      }

      var _update = function() {
         _points.map(function(point) {
            point.update(-4)

            if (point.is_beyond_fov()) {
               point.update(400)
            }
         })
      }

      var _debug = function() {
         _points.map(function(point) {
            point.debug()
         })
      }

      var _draw = function(canvas) {
         canvas.fillStyle = "rgb(0,0,0)"
         canvas.fillRect(0, 0, Constants.SCREEN_WIDTH, Constants.SCREEN_HEIGHT)

         _points.map(function(point) {
            point.draw(canvas)
         })
      }

      _initialize()

      return {
         initialize: _initialize,
         update: _update,
         draw: _draw,
         debug: _debug
      }
   }

   var Point = function(x, y, z) {
      var _x = x
      var _y = y
      var _z = z

      var _draw = function(canvas) {
         var scale = Constants.FOV / (Constants.FOV + _z); 

         var x2d = (_x * scale) + Constants.HALF_WIDTH
         var y2d = (_y * scale)  + Constants.HALF_HEIGHT

         canvas.lineWidth = scale; 
         canvas.strokeStyle = "rgb(255,255,255)"
         canvas.beginPath()
         canvas.moveTo(x2d, y2d); 
         canvas.lineTo(x2d + scale, y2d); 
         canvas.stroke(); 
      }

      var _update = function(z_delta) {
         _z += z_delta
      }

      var _debug = function() {
         console.log("x: " + _x + ", y: " + _y + ", z: " + _z)
      }

      var _is_beyond_fox = function() {
         return _z < -(Constants.FOV)
      }

      return {
         draw: _draw,
         update: _update,
         is_beyond_fov: _is_beyond_fox,
         debug: _debug
      }
   }

   window.Engine = Engine
   window.StarField = StarField
})()



$(function() {
   var canvas = $('#Canvas2D')[0].getContext('2d')

   var engine = new Engine(canvas)
   engine.add(new StarField(canvas))

   window.setInterval(engine.main_loop, 50)
})

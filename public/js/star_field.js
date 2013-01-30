(function() {
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

   window.StarField = StarField
})()

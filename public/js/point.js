(function() {
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

   window.Point = Point
})()

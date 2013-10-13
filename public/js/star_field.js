define(['Constants', 'point'], function(Constants, Point) {
   var StarField = function() {
      var _points = []

      this.initialize = function() {
         _points = [];
         for (i=0; i<Constants.NUM_POINTS; i++) {
            var point = new Point((Math.random()*400)-200, (Math.random()*400)-200 , (Math.random()*400)-200);
            _points.push(point); 
         }
      }

      this.update = function() {
         _points.map(function(point) {
            point.update(-4);

            if (point.is_beyond_fov()) {
               point.update(400);
            }
         })
      }

      this.debug = function() {
         _points.map(function(point) {
            point.debug();
         });
      };

      this.draw = function(canvas) {
         canvas.fillStyle = "rgb(0,0,0)";
         canvas.fillRect(0, 0, Constants.SCREEN_WIDTH, Constants.SCREEN_HEIGHT);

         _points.map(function(point) {
            point.draw(canvas);
         });
      };

      this.initialize();
   };

   return StarField;
});

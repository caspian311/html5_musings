require([
      "http://code.jquery.com/jquery-1.9.0.min.js",
      "constants",
      "controller", 
      "engine", 
      "point", 
      "star_field"
      ], function() {
   $(function() {
      var canvas = $("#my_canvas")[0].getContext("2d")

      var engine = new Engine(canvas)
      engine.add(new StarField(canvas))
      new Controller(engine)

      window.setInterval(engine.main_loop, 50)
   })
})

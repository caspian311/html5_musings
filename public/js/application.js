require([
      "controller", 
      "engine", 
      "star_field",
      "star_fighter"
      ], function(Controller, Engine, StarField, StarFighter) {
   $(function() {
      var canvas = $("#my_canvas")[0].getContext("2d");

      var engine = new Engine(canvas);
      engine.add(new StarField(canvas));
      engine.add(new StarFighter(canvas));
      new Controller(engine);

      engine.initialize();
      window.setInterval(engine.mainLoop, 50);
   })
})

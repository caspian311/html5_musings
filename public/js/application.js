require([
      "controller", 
      "engine", 
      "star_field",
      "target",
      "lasers"
      ], function(Controller, Engine, StarField, Target, Lasers) {
   $(function() {
      var canvas = $("#my_canvas")[0].getContext("2d");

      var engine = new Engine(canvas);
      engine.add(new StarField());
      engine.add(new Target());
      engine.add(new Lasers());
      new Controller(engine);

      engine.initialize();
      window.setInterval(engine.mainLoop, 50);
   })
})

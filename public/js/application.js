require([
      "controller", 
      "engine", 
      "shapes"
      ], function(controller, Engine, Shapes) {
   $(function() {
      var canvas = $("#my_canvas")[0].getContext("2d");

      var engine = new Engine(canvas);
      engine.add(new Shapes());
      controller.start(engine);

      engine.initialize();
      window.setInterval(engine.mainLoop, 1000);
   })
})

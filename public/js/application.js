require([
      "controller", 
      "engine", 
      "game_of_life"
      ], function(Controller, Engine, GameOfLife) {
   $(function() {
      var canvas = $("#my_canvas")[0].getContext("2d");

      var engine = new Engine(canvas);
      engine.add(new GameOfLife());
      new Controller(engine);

      engine.initialize();
      window.setInterval(engine.mainLoop, 1000);
   })
})

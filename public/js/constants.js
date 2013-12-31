define(function() {
   var Constants = {
      SCREEN_WIDTH: 400,
      SCREEN_HEIGHT: 400,
      NUMBER_OF_CELLS_HEIGHT: 4,
      NUMBER_OF_CELLS_WIDTH: 4
   }
   Constants.WIDTH_OF_CELL = Math.floor(Constants.SCREEN_WIDTH / Constants.NUMBER_OF_CELLS_WIDTH);
   Constants.HEIGHT_OF_CELL = Math.floor(Constants.SCREEN_HEIGHT / Constants.NUMBER_OF_CELLS_HEIGHT);

   return Constants;
});

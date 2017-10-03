var Move = {

};


Move.get_Block = function(coord_x, coord_y) {

  //console.log(coord_x, coord_y);

  for (var i = 0; i < Game.arr.length; i++) {
    var obj = Game.arr[i];
    //debugger;
    if ((obj.hasOwnProperty('params_x')) && ((obj.position_x < coord_x) && (coord_x < (obj.position_x + Canv.block_x)))) {

      if ((obj.hasOwnProperty('params_y')) && ((obj.position_y < coord_y) && (coord_y < (obj.position_y + Canv.block_y)))) {

        //debugger;
        return obj.blockNum;
      }
    }

  }
}


Move.rules = function(number_block) {


  return ((Game.nullPosition + 1 == number_block) || (Game.nullPosition - 1 == number_block) || (Game.nullPosition + Draw._blocks == number_block) || (Game.nullPosition - Draw._blocks == number_block) ); 





}

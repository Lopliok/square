



canvas.onclick = function(e) {

    //console.log(e.layerY);
    //console.log(e.layerX);
    //console.log(e);

    //var canvxx = event.pageX - OffsetX;
    //var canvyy = event.pageY - OffsetY;

    //console.log(canvxx, canvyy);
    //console.log(ic);

    var block = Move.get_Block(e.layerX, e.layerY);

    if ((block != null) && Move.rules(block)) {

    //  console.log(Move.rules(block));
      //console.log(block);
      Game.move(block);
      //Game.arr.reverse();
      //debugger;
      Canv.background();
      Draw.arr();
    }


    //Canv.ctx.clearRect(0, 0, canvas.width, canvas.height);


    //Canv.background();
    //Draw.all();
    //Game.create();
    //Game.last_del();
    //Draw.arr();





}

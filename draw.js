var Draw = {
  _blocks: 4,

};



Draw.init = function () {
  //Canv.ctx.clearRect(0, 0, canvas.width, canvas.height);

  Canv.size();
  Canv.background();
  //Draw.all();
  Game.create();
  Game.last_del();
  Draw.arr();
  //Game.move(2);
  //Canv.sheet();


}



Draw.arr = function() {

  for (var i = 0; i < Game.arr.length; i++) {
    var obj = Game.arr[i];

    //debugger;

    if ((obj.hasOwnProperty('blockNum')) && (Number.isInteger(obj.blockNum))){
      Canv.block(obj);

    } else {
      //Canv.ctx.fillStyle = "#a8c101";
      //Canv.ctx.fillRect(10, 10, 50, 50);
    }

  }

}



Draw.set_resise = function() {

  Draw.resize = true;
}

var Game = {
  countBlocks: 0,
  arr: [],
  nullPosition: null
};





Game.create = function() {

// push items to array with coord of picture for later drawing to canvas

  var block_spacex = 0;

  for (var i = 1; i < Canv.width; i+= Canv.block_x) {

    var block_spacey = 0;
    block_spacex+= 1;


    for (var j = 1; j < Canv.height; j+= Canv.block_y) {

      block_spacey+= 1;




      this.countBlocks++;

      this.arr.push(
      {
        blockNum: this.countBlocks,
        params_x: i,
        params_y: j,
        position_x: i + block_spacex,
        position_y: j + block_spacey

      });

    //Canv.ctx.drawImage(image, i, j, Canv.block_x, Canv.block_y, i, j, Canv.block_x, Canv.block_y);
    }
  }
}

Game.remove = function() {
  Game.arr = [];
}


Game.last_del = function() {

  this.arr[this.countBlocks-1].blockNum = null;
  this.nullPosition = this.countBlocks;


  //console.log(this.arr[this.countBlocks-1]);
}


Game.move = function(num) {

  for (var i = 0; i < this.arr.length; i++) {
    var obj = this.arr[i]
/*
    if ((obj.hasOwnProperty('blockNum')) && (obj.blockNum == null) ) {
      console.log(obj.blockNum);
      //debugger;
      obj.blockNum = i + 1;
      o

      //console.log(obj);

    } else
*/
    if ((obj.hasOwnProperty('blockNum')) && (obj.blockNum == num) ) {
      //console.log(obj.blockNum);



      this.change(num, this.nullPosition);
      //debugger;
      this.arr[this.nullPosition-1].blockNum = this.nullPosition;
      this.nullPosition = num;
      obj.blockNum = null;
      //console.log(Game.arr);


    }
  }

  //this.arr[this.countBlocks-1].blockNum = null;

  //console.log(this.arr[this.countBlocks-1]);
}


Game.change = function(i, j) {

  //debugger;

  var x = this.arr[i-1].params_x;


  this.arr[i-1].params_x = this.arr[j-1].params_x;
  this.arr[j-1].params_x = x;

  //debugger;


  var y = this.arr[i-1].params_y;
  this.arr[i-1].params_y = this.arr[j-1].params_y;
  this.arr[j-1].params_y = y;
  //console.log(x,y);
  //debugger;

}


Game.get_nullPosition = function() {
  return this.nullPosition;
}

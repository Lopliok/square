var Canv = {
  canvas: document.getElementById('canvas'),
  ctx: canvas.getContext('2d'),
};



//var canvas = document.getElementById('canvas');
//var ctx = canvas.getContext('2d');


Canv.size = function() {




  this.canvas.width = image.naturalWidth;
  this.canvas.height = image.naturalHeight;
  this.width = image.naturalWidth;
  this.height = image.naturalHeight;

    this.block_x = this.width / Draw._blocks;
    this.block_y = this.height / Draw._blocks;





}


Canv.background = function() {

  Canv.ctx.fillStyle = "#000";
  Canv.ctx.fillRect(0,0,this.width,this.height);


}

Canv.block = function(obj) {



    Canv.ctx.drawImage(image, obj.params_x, obj.params_y, Canv.block_x, Canv.block_y, obj.position_x, obj.position_y, Canv.block_x, Canv.block_y);




}


Canv.resolution = function() {
  if (this.width > 1000) {
    this.width /= 2;
    this.height /= 2;
    this.canvas.width /= 2;
    this.canvas.height /=2;
    this.block_x = this.width / Draw._blocks;
    this.block_y = this.height / Draw._blocks;
    Draw.set_resise();


  }

}





/*


Canv.sheet = function() {

  //debugger

  this.ctx.width = Canv.width;
  this.ctx.height = Canv.height;

  //console.log(ctx.width);

//debugger

  this.ctx.beginPath();
  for(var x = 0; x <= this.ctx.width; x += this.block_x + 2) {
          this.ctx.moveTo(0.5 + x, 0);
          this.ctx.lineTo(0.5 + x, this.ctx.height);

  }

  //debugger
  for(var y = 0; y <= this.ctx.height; y += this.block_y + 2) {
          //console.log(x);
          this.ctx.moveTo(0, 0.5 + y);
          this.ctx.lineTo(this.ctx.width, 0.5 + y);
          //if (y > 200 ) {
            //debugger;
          //}
  }
  this.ctx.closePath();
  this.ctx.stroke();
}

*/

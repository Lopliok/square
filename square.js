var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');


var volnax, volnay;




var image = new Image();   // using optional size for image
image.onload = drawImageActualSize; // draw when image has loaded

// load an image of intrinsic size 300x227 in CSS pixels
image.src = '1162.jpg';

function drawImageActualSize() {
  // use the intrinsic size of image in CSS pixels for the canvas element
  

  canvas.width = this.naturalWidth;
  canvas.height = this.naturalHeight;

  // will draw the image as 300x227 ignoring the custom size of 60x45
  // given in the constructor
  //ctx.drawImage(this, 0, 0);

  // To use the custom size we'll have to specify the scale parameters
  // using the element's width and height properties - lets draw one
  // on top in the corner:


  // context.drawImage(obrazek, x1, y1, vyska1, sirka1, x2, y2, vyska2, sirka2);

  // x1 a y1 rika pozici na obrazku odkud obrazek vykreslujeme
  // x2 a y2 pozici na canvasu odkud zacneme kreslit
  // vyska2 a sirka2 - primarni resizovani obrazku nebo vyrezu vysledna velikost - lepe poresit na skutecnou
  // vyska1 a sirka1 - o kolik se chceme posunout - do x,y obrazku koncak

  // context.drawImage(obrazek, x1, y1, vyska1, sirka1, x2, y2, vyska2, sirka2);


  //ctx.drawImage(this, 0, 0);

  //ctx.drawImage(obrazek, x1, y1, vyska1, sirka1, x2, y2, vyska2, sirka2);
  //ctx.drawImage(this, 20, 20, this.width, this.height, 0, 0, 200, 200);
  var kostkax = this.width/4;
  var kostkay = this.height/4;
  volnax = 187;
  volnay = 188;


    for (var i = 0; i < this.width; i+= kostkax) {
      //console.log(kostka);


      for (var j = 0; j < this.height; j+= kostkay) {

        // 187 - x
        // 188 - y

        if ( (i < volnax && i + kostkax > volnax) && (j < volnay && j + kostkay > volnay) ) {
          continue;
        }

        ctx.drawImage(this, i, j, kostkax, kostkay, i, j, kostkax, kostkay);
      //  console.log(i + " " + kostkax);
      //  console.log(j + " " + kostkay);
      }

    }


    //console.log(ctx.width);


    Sheet.draw(kostkax, kostkay);




  //ctx.drawImage(this, 0, 0, 20, 20, 0, 0, this.width/2, this.height/2);

  //ctx.drawImage(this, this.width/2, 0, this.width/2, this.height/2, this.width/2, 0, this.width/2, this.height/2);

}

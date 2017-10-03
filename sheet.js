var Sheet = {

}



Sheet.draw = function(kostkax, kostkay) {

  //debugger

  ctx.width = image.naturalWidth;
  ctx.height = image.naturalHeight;

  //console.log(ctx.width);

//debugger

  ctx.beginPath();
  for(var x = 0; x <= ctx.width; x += kostkax) {
          ctx.moveTo(0.5 + x, 0);
          ctx.lineTo(0.5 + x, ctx.height);

  }

  //debugger
  for(var y = 0; y <= ctx.height; y += kostkay) {
          //console.log(x);
          ctx.moveTo(0, 0.5 + y);
          ctx.lineTo(ctx.width, 0.5 + y);
          if (y > 200 ) {
            //debugger;
          }
  }
  ctx.closePath();
  ctx.stroke();
}

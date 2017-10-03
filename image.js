//var image = new Image(400, 300);

window.addEventListener('load', function() {
  document.querySelector('input[type="file"]').addEventListener('change', function() {
      if (this.files && this.files[0]) {
          image = document.querySelector('img');  // $('img')[0]
          image.src = URL.createObjectURL(this.files[0]); // set src to file url
          //debugger;
          image.onload = Draw.init; // optional onload event listener
          //debugger;
      }
  });
});

//function imageIsLoaded(e) { alert(e.target); }


//var image = new Image();   // using optional size for image



// load an image of intrinsic size 300x227 in CSS pixels
//image.src = 'image.jpg';

//image.onload = Draw.init;

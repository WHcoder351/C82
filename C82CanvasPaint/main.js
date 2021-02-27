var mE="empty";
var lpx,lpy;
      canvas = document.getElementById("myCanvas");
      ctx = canvas.getcontext("2d");
     canvas.addEventListener("mousedown",my_mouseDown);

        function my_mouseDown(e){
       mE="mouseDown";
      }
      canvas.addEventListener("mouseup",my_mouseUp);

     function my_mouseUp(e){
    mE="mouseUp";
     }
     canvas.addEventListener("mouseleave",my_mouseLeave);

     function my_mouseLeave(e){
     mE="mouseLeave";
      }
     canvas.addEventListener("mousemove", my_Mm);
     function my_Mm(e)
      {
       cpomx = e.clientX - canvas.offsetLeft;
       cpomy = e.clientY- canvas.offsetTop;
       if(mE=="mouseDown"){
     ctx.beginPath();
     ctx.strokeStyle = "black";
      ctx.lineWidth = 5;
      console.log("Last Position of x and y coordinates = ")
     console.log("X="+ lpx + "Y="+lpy);
      ctx.moveTo(lpx, lpy);
       console.log("Current Position of x and y coordinates = ")
      console.log("X="+ cpomx + "Y="+cpomy);
     ctx.lineTo(cpomx, cpomy);
      ctx.stroke();
    }
    lpx=cpomx;
    lpy=cpomy;
     }

$(document).ready(function() {
    var canvas = document.getElementById("canvas");
    var ctx = canvas.getContext("2d");
    var circles = [];

    $(canvas).mousemove(function(event) 
    {
      var x = event.pageX - canvas.offsetLeft; //gets the x and y coordinates of the mouse
      var y = event.pageY - canvas.offsetTop;
      var circle = { x: x, y: y, opacity: 1 }; //creates a circle and adds it to the array
      circles.push(circle);

      $(canvas).mouseout(function() 
      {
        circles = [];
      });
    });

    function draw() //function to draw the circles
    {
      ctx.clearRect(0, 0, canvas.width, canvas.height); //clears the canvas

      circles.forEach(function(circle, index) // foreach loop to draw the circles
      {
        ctx.globalAlpha = circle.opacity;
        ctx.beginPath();
        ctx.arc(circle.x, circle.y, 10, 0, 2 * Math.PI); 
        ctx.fillStyle = "blue";
        ctx.fill();
        ctx.closePath(); 

        circle.opacity -= 0.01;

        if (circle.opacity <= 0) //removes the circles from the array
        {
        
          circles.splice(index, 1);
        }
      });

      requestAnimationFrame(draw); //calls the draw function
    }

    draw();
  });
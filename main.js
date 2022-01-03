var canvas=  new fabric.Canvas('myCanvas');
ball_x=0;
ball_y=0;
hole_x=400;
hole_y=800;

block_image_width=5;
block_image_height = 5;

function load_image()
{
  fabric.Image.fromURL("https://thumbs.dreamstime.com/b/golf-hole-green-grass-golf-course-top-view-field-86137254.jpg" , function(Img){
    hole_object=Img;
    hole_object.scaleToWidth(50);
    hole_object.scaleToHeight(50);
    hole_object.set({
      top:hole_y,
      left:hole_x
    });
    canvas.add(hole_object);
  });
  new_image();
}

function new_image(){
  fabric.Image.fromURL("https://www.pngitem.com/pimgs/m/4-42739_transparent-golf-ball-clipart-png-cartoon-golf-ball.png", function(Img){
    ball_object = Img;
    ball_object.scaleToWidth(50);
    ball_object.scaleToHeight(50);
    ball_object.set({
      top:ball_y,
      left:ball_x
  });
    canvas.add(ball_object);
  });
}

window.addEventListener("keydown" , my_keydown);
function my_keydown(e)
{
  keyPressed=e.keyCode;
  console.log(keyPressed);
  if((ball_x == hole_x)&&(ball_y == hole_y)){
    canvas.remove(ball_object);
    document.getElementById("hd3").innerHTML="You Have Hit The Goal!!";
    document.getElementById("myCanvas").style.bordercolor="red";
  }
  
  if (keyPressed == '38')
    {
      up();
      console.log("up");
    }
  
  if (keyPressed == '40')
    {
      down();
      console.log("down");
    }
  if (keyPressed == '37')
    {
      left();
      console.log("left");
    }
  if (keyPressed == '39')
    {
      right();
      console.log("right");
    }
  
  function up(){
    if(ball_y >=0)
  {
    ball_y = ball_y - block_image_height;
    console.log("Block Image Height = " + block_image_height);
    console.log("Up Key Pressed , X ="+ ball_x +", Y = " + ball_y);
    canvas.remove(ball_object);
    new_image();
  }
}
  
  function down(){
    if(ball_y <=450)
  {
    ball_y = ball_y - block_image_height;
    console.log("Block Image Height = " + block_image_height);
    console.log("Down Key Pressed , X =" +ball_x +", Y = " + ball_y);
    canvas.remove(ball_object);
    new_image();
  }
}
  
  function left(){
    if(ball_x >5)
  {
    ball_x = ball_x - block_image_width;
    console.log("Block Image Width = " + block_image_width);
    console.log("Left Key Pressed , X ="+ ball_x +", Y = " + ball_y);
    canvas.remove(ball_object);
    new_image();
  }
}

  function left(){
    if(ball_x <=1050)
  {
    ball_x = ball_x - block_image_width;
    console.log("Block Image Width = " + block_image_width);
    console.log("Right Key Pressed , X ="+ ball_x +", Y = " + ball_y);
    canvas.remove(ball_object);
    new_image();
  }
}
}




//initial size of ornaments 
var size1 = 1;
var size2 = 1;
var size3 = 1;
var size4 = 1;
var size5 = 1;

//for wreath
let wreath;
var dragging = false;
var x, y, w, h;
var offsetX, offsetY;

//for gifts
var on = false;

//for lights
var r1 = 255;
var g1 = 255;
var b1 = 255;

let star;
//the initial position of the star
let posXstar = 1000;
let posYstar = 1000;

function preload() {
  //ornaments
  star = loadImage("pictures/star.png");
  img1 = loadImage("pictures/deco1.png");
  img2 = loadImage("pictures/deco2.png");
  img3 = loadImage("pictures/deco3.png");
  img4 = loadImage("pictures/deco4.png");
  img5 = loadImage("pictures/deco5.png");
  img6 = loadImage("pictures/deco6.png");
  img7 = loadImage("pictures/snowman.png");
  wreath = loadImage("pictures/wreath.png");

  gift1 = loadImage("pictures/gift1.png");
  gift2 = loadImage("pictures/gift2.png");
  gift3 = loadImage("pictures/gift3.png");
  gift4 = loadImage("pictures/gift4.png");
}

function setup() {
  createCanvas(500,500); 
  // Starting location
  x = 10;
  y = 300;

  // Dimensions
  w = 90;
  h = 90;
}

function draw() {
  background(166, 13, 0);
  
  //mat
  fill(246, 241, 241);
  ellipse(250, 475, 300, 60);
  stroke(13, 132, 80);
  strokeWeight(8);
  noFill();
  ellipse(250, 475, 250, 30);
  noStroke();
  fill(0);
  ellipse(250, 475, 200, 10);
  
  //christmas tree
  fill(0, 117, 0);
  noStroke();
  triangle(150, 240, 250, 150, 350, 240);
  triangle(130, 320, 250, 200, 370, 320);
  triangle(110, 400, 250, 250, 390, 400);
  
  //trunk
  fill(95, 43, 24);
  rect(225, 400, 50, 80); 
  
   //star
  image (star, posXstar, posYstar);
  star.resize(150,150); 
  
   //gifts
  if (on){
    image(gift1, 70, 360, 180, 180);
      
    image(gift2, 230, 360, 150,150);
  
    image(gift3, 330, 360, 150,150);
  
    image(gift4, 30, 390, 150,150);
    }
  else {
    gift1.resize(0,0);
    gift2.resize(0,0);
    gift3.resize(0,0);
    gift4.resize(0,0);
  }
  //ornaments
  //red
   image(img1, 275, 340, size1, size1);
   image(img1, 150, 225, 30,30);

  //blue
   image(img2, 260, 190, size2, size2);
   image(img2, 320, 225, 30, 30);
  
  //gray
   image(img3, 175, 190, size3, size3);
   image(img3, 140, 310, 30, 30);

  //orange
   image(img4, 165, 330, size4, size4);
   image(img4, 349, 390, 30, 30);
  
  //red with dots
   image(img5, 175, 260, 50, 50);
  
  //purple
   image(img6, 120, 390, 30, 30);
   image(img6, 340, 310, 30, 30);
  
  //snowman
   image(img7, 260, 260, size5, size5);
   
  //buttons for ornaments
  //red
  fill(237, 28, 36);
  ellipse(35, 70, 35, 35);
  //blue
  fill(33, 64, 154);
  ellipse(35, 120, 35, 35);
  //gray
  fill(140, 149, 157);
  ellipse(35, 170, 35, 35);
  //orange
  fill(242, 101, 34);
  ellipse(35, 220, 35, 35);
  //snowman
  image(img7, 10, 245, 50, 50);

  //Merry Christmas text
  fill(255);
  textSize(30);
  textFont("times new roman");
  textStyle(ITALIC);
  text('Merry Christmas', 275, 40);
  
 //lights change colors when mouse hovers
  fill(255);
  if (mouseX > 200 &&
      mouseX < 300 &&
      mouseY > 200 &&
      mouseY < 400)
  fill(r1,g1,b1);
  ellipse(220, 240, 10,10);
  ellipse(240, 243, 10,10);
  ellipse(260, 243, 10,10);
  ellipse(280, 240, 10,10);
  ellipse(200, 325, 10,10);
  ellipse(220, 327, 10,10);
  ellipse(240, 329, 10,10);
  ellipse(260, 330, 10,10);
  ellipse(280, 327, 10,10);
  ellipse(300, 325, 10,10);
  r1=random(255);
  g1=random(255);
  b1=random(255);

  //button to add and remove gifts 
  noStroke();
  fill(206, 174, 167);
  if (mouseX > 10 &&
      mouseX < 110 &&
      mouseY > 10 &&
      mouseY < 40) 
  fill(218, 129, 155);
  rect(10, 10, 100, 25);
 
  //text for button
  noStroke();
  fill(0);
  textSize(20);
  text("gifts",40,30);
  
  //wreath
  image(wreath, x, y, w, h);
  
  //bring wreath to the tree by dragging it
 if (mouseX > x && mouseX < x + w && mouseY > y && mouseY < y + h) {
    rollover = true;
  } else {
    rollover = false;
  }

  if (dragging) {
    x = mouseX + offsetX;
    y = mouseY + offsetY;
  }
  
  //circle follows mouse
  noStroke();
  fill(255,255,127,200); //white, semi-transparent
  ellipse(mouseX+50,mouseY+50,10,10); 
}

function keyReleased() {
    //when press "s" key, star appears 
    if (key === 's') {
      posXstar = 175;
      posYstar = 80;
    }
  // when press "n" key, star disappears
  if (key === 'n') {
    posXstar = 1000; 
    posYstar = 1000;
  }
}
function mousePressed() {
  //for gifts
  if (mouseX > 10 &&
      mouseX < 110 &&
      mouseY > 10 &&
      mouseY < 40)  {
    on = !on;
  }
  
 //click for ornaments
  if (mouseX>= 20 && mouseX<= 50 && mouseY>= 50 && mouseY<= 70 ){
    size1 = 50;}
  if (mouseX>= 20 && mouseX<= 50 && mouseY>= 100 && mouseY<= 120){
    size2 = 50;}
  if (mouseX>= 20 && mouseX<= 50 && mouseY>= 150 && mouseY<= 170){
    size3 = 50;}
  if (mouseX>= 20 && mouseX<= 50 && mouseY>= 205 && mouseY<= 220){
    size4 = 50;}
  if (mouseX>= 20 && mouseX<= 40 && mouseY>= 250 && mouseY<= 260){
    size5 = 50;}

 //wreath drag
  if (mouseX > x && mouseX < x + w && mouseY > y && mouseY < y + h) {
    dragging = true;

    offsetX = x - mouseX;
    offsetY = y - mouseY;
  } 
}

function mouseReleased() {
  // Quit dragging
  dragging = false;
}

function keyTyped() {
  if (key === '1') {
    x = 10;
    y = 300;
   size1 = 1;
   size2 = 1;
   size3 = 1;
   size4 = 1;
   size5 = 1;
  }
}

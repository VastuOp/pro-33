var snow;
var s1, s2, s3, s4, s5;




function preload() {
  s1 = loadimage('snow1.jpg');
  s2 = loadimage('snow2.jpg');
  s3 = loadimage('snow3.jpg');
  s4 = loadimage('snow4.webp');
  s5 = loadimage('snow5.webp');

}





function setup() {
  createCanvas(800, 400);
  snow = createSprite(400, 10, 50, 50);
  snow.addImage(s1);
}

function draw() {
  background(255, 255, 255);
  drawSprites();
}
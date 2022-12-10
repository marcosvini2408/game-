var floresta
var curupiraImg
var boitataImg
var curupira
var boitata
var vida
var vidaImg
var fogo
var cobra
var fogoImg
var cobraImg
var grupofogo
var grupocobra

function preload() {
  floresta = loadImage('assets/floresta.jpg')
  curupiraImg = loadImage('assets/curupira.png')
  boitataImg = loadImage('assets/boitata.png')
  vidaImg = loadImage('assets/coracao.png')
  cobraImg = loadImage('assets/cobrapng')
  fogoImg = loadImage('assets/fogo.png')
}
function setup() {
  createCanvas(windowWidth, windowHeight)
  boitata = createSprite(windowWidth - 1500, windowHeight - 300, 50, 50)
  boitata.addImage(boitataImg)
  boitata.scale = 0.3

  curupira = createSprite(windowWidth - 500, windowHeight - 200, 50, 50)
  curupira.addImage(curupiraImg)
  curupira.scale = 0.7

  grupocobra = new Group()
  grupofogo = new Group()

  barradevida()
}

function draw() {
  background(floresta)
  atirar()
  drawSprites()
}

function barradevida() {
  push()
  image(vidaImg, 1200, 800, 20, 20)
  fill('white')
  rect(1200, 200, 180, 20)
  pop()
}

//function atirar() {
// if (keyWentDonw('space')) {
//   cobra = createSprite(displayWidth - 1150, curupira.y - 60, 20, 20)
//  cobra.velocityX = 20
//  cobra.addImage(cobraImg)
//  grupocobra.add(cobra)
//}
//}

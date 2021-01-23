const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var hero, heroIMG;
var ground;
var backgroundIMG;


function preload() {
  backgroundIMG= loadImage("images/GamingBackground.png")

}

function setup() {
  createCanvas(3000, 800);
  Engine.create();
  world = engine.world;
  // create sprites here

}

function draw() {
  background(backgroundIMG);

  Engine.update(engine);

}


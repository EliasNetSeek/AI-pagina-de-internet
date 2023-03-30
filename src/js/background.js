let particles = [];
const num = 1000;

let timer = 0;
const timeToChangeSeed = 2000;

const noiseScale = 0.01;
const speeed = 1;
let noiseSeedVar = 1;

let fade = 0;

function setup() {
  var canvas = createCanvas(screen.width, screen.height);
  // var canvas = createCanvas(400, 400);
  canvas.parent('backgroundAnimat');
  for (let i = 0; i < num; i++) {
    particles.push(createVector(random(width), random(height)));
  }
  stroke(255);
}

function draw() {
  background(0, 10);
  for (let i = 0; i < num; i++) {
    let p = particles[i];
    point(p.x, p.y);

    let n = noise(p.x * noiseScale, p.y * noiseScale);

    let a = TAU * n;

    p.x += cos(a) * speeed;
    p.y += sin(a) * speeed;

    if (!onScreen(p)) {
      p.x = random(width);
      p.y = random(height);
    }

    if (millis() >= timeToChangeSeed + timer) {
      // noiseSeed(millis());
      // randomSeed(millis());
      noiseSeedVar += 1;
      timer = millis();
    }
  }

}

function onScreen(v) {
  return v.x >= 0 && v.x <= width && v.y >= 0 && v.y <= height;
}


// new p5(draw, 'backgroundAnimat')
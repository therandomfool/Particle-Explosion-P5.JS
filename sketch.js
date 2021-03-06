let colors = 
['#0B6A88','#2DC5F4','#70327E','#9253A1','#A42963',
'#EC015A','#F063A4','#F16164','#F89E4F','#FCEE21'];

let particles = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
  clear();
}

function draw() {
  background(221, 236, 240);
  
  // blendMode(ADD);
  for (let i = 0; i < 16; i++) {
    particles.push(new Particle(width/1.15, height/5.33));
  }

  for (let particle of particles) {
    let gravity = createVector(0, 0.2);
    particle.applyForce(gravity);
    particle.update();
    particle.show();
  }

  for (let i = particles.length - 1; i >= 0; i--) {
    if (particles[i].finished()) {
      particles.splice(i, 1);
    }
  }
}

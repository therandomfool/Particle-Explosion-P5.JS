let colorsCT = ['#0B6A88', '#2DC5F4', '#70327E', '#9253A1', '#A42963',
  '#EC015A', '#F063A4', '#F16164', '#F89E4F', '#FCEE21'
];

class Particle {
  constructor(x, y) {
    let offset = p5.Vector.random2D();
    offset.mult(random(2, 20));
    this.pos = createVector(x, y);
    this.pos.add(offset);
    let a = random(PI / 2 + 1, PI + PI / 2 - 1);
    this.vel = p5.Vector.fromAngle(a);
    this.vel.rotate(random(-0.2, 0.2));
    this.vel.mult(random(1, 8));
    this.acc = createVector(0, 0);
    this.r = 4;
    this.lifetime = 200;
    this.color = color(random(colorsCT));
  }

  finished() {
    return (this.lifetime < 0);
  }


  applyForce(force) {
    this.acc.add(force);
  }


  edges() {
    if (this.pos.y >= height - this.r) {
      this.pos.y = height - this.r;
      this.vel.y *= -1;
    }

    if (this.pos.x >= width - this.r) {
      this.pos.x = width - this.r;
      this.vel.x *= -1;
    } else if (this.pos.x <= this.r) {
      this.pos.x = this.r;
      this.vel.x *= -1;
    }
  }




  update() {

    this.vel.add(this.acc);
    this.pos.add(this.vel);
    this.acc.set(0, 0);

    this.lifetime -= 2;
  }

  show() {
    this.color.setAlpha(this.lifetime);
    stroke(this.color);
    strokeWeight(2);
    fill(this.color);
    ellipse(this.pos.x, this.pos.y, this.r * 2);
  }
}
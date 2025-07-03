/* eslint-disable @typescript-eslint/no-explicit-any */

// Dot class
export class Dot {
  x = 0;
  y = 0;
  vx = 0;
  vy = 0;
  radius = 0;
  index = 0;
  canvas: any = null;
  colors = [
    `rgba(255, 255, 255, 0.50)`,
    `rgba(255, 255, 255, 0.25)`,
    `rgba(255, 255, 255, 0.75)`,
  ];
  ctx: any = null;
  constructor(index: number, canvas: any, ctx: any) {
    this.x = Math.random() * canvas.width;
    this.y = Math.random() * canvas.height;
    this.vx = (Math.random() - 0.6) * 1;
    this.vy = (Math.random() - 0.6) * 1;
    this.radius = 1;
    this.index = index;
    this.ctx = ctx;
    this.canvas = canvas;
  }

  move() {
    this.x += this.vx;
    this.y += this.vy;

    // Bounce off walls
    if (this.x < 0 || this.x > this.canvas.width) this.vx *= -1;
    if (this.y < 0 || this.y > this.canvas.height) this.vy *= -1;
  }

  draw() {
    this.ctx.beginPath();
    this.ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
    this.ctx.fillStyle = this.colors[this.index % 3];
    this.ctx.fill();
  }
}

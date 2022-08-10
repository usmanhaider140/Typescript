export class Circle {
  public radius: number;
  constructor(radius: number) {
    this.radius = radius;
  }
  get area() {
    return Math.PI * this.radius ** 2;
  }
}

export class Square {
  public side: number;
  constructor(side: number) {
    this.side = side;
  }
  get area() {
    return this.side ** 2;
  }
}

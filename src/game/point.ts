export class Point {
  private size: number = 30;
  constructor(public x: number, public y: number) {}

  public draw(ctx: CanvasRenderingContext2D) {
    ctx.fillStyle = "black";
    ctx.fillRect(this.x * this.size, this.y * this.size, this.size, this.size);

    ctx.strokeStyle = "white";
    ctx.strokeRect(
      this.x * this.size,
      this.y * this.size,
      this.size,
      this.size
    );
  }

  public add(direction: [number, number]): Point {
    return new Point(this.x + direction[0], this.y + direction[1]);
  }
}
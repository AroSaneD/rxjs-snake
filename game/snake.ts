import { Point } from "./point";

export class Snake {
  public body: Point[];
  public direction: [number, number] = [1, 0];

  public getHead(): Point {
    return this.body[0];
  }

  constructor(data: Partial<Snake>) {
    Object.assign(this, data);
  }

  public static getInitialSnake(startX: number, startY: number) {
    const p2 = new Point(startX - 2, startY);
    const p1 = new Point(startX - 1, startY);
    const head = new Point(startX, startY);

    return new Snake({body: [head, p1, p2], direction: [1, 0]});
  }

  private getNewSnake(points: Point[], newDirectoin: [number, number]) {
    return new Snake({ ...this, body: points });
  }

  public move(newDirection: [number, number]) {
    const newHead = this.getHead().add(newDirection);
    const newBody = [newHead, ...this.body.slice(0, -1)];
    return this.getNewSnake(newBody, newDirection);
  }

  // mutable, maybe draw elsewhere?
  public draw(ctx: CanvasRenderingContext2D) {
    this.body.forEach(p => p.draw(ctx));
  }
}

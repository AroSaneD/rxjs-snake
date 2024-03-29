import { Point } from './point';
import { Direction } from '../model/direction';

export class Snake {
    public body: Point[];
    // todo: remove starting direction from this class
    // todo: export direction to an enum (or enum-like object, with predefined properties)

    // public direction: [number, number] = [1, 0];

    public getHead(): Point {
        return this.body[0];
    }

    constructor(data: Partial<Snake>) {
        Object.assign(this, data);
    }

    private getNewSnake(points: Point[]) {
        return new Snake({ ...this, body: points });
    }

    public move(newDirection: Direction) {
        const newHead = this.getHead().add(newDirection);
        const newBody = [newHead, ...this.body.slice(0, -1)];
        return this.getNewSnake(newBody);
    }

    // mutable, maybe draw elsewhere?
    public draw(ctx: CanvasRenderingContext2D) {
        this.body.forEach(p => p.draw(ctx));
    }
}

export function getInitialSnake(startX: number, startY: number) {
    const p2 = new Point(startX - 2, startY);
    const p1 = new Point(startX - 1, startY);
    const head = new Point(startX, startY);

    return new Snake({ body: [head, p1, p2] /* , direction: [1, 0] */ });
}

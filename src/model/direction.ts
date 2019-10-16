// maybe: introduce and change to vectors?
export type Direction = [number, number];

export class DirectionEnum {
    public static up: Direction = [0, 1];
    public static right: Direction = [1, 0];
    public static down: Direction = [0, -1];
    public static left: Direction = [-1, 0];
}

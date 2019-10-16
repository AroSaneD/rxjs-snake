import { Snake, getInitialSnake } from '../game/snake';
import { Point } from '../game/point';
import { Direction } from '../model/direction';

export class GameState {
    snake: Snake;
    walls: Point[];
    direction: Direction;

    constructor(data: Partial<GameState>) {
        Object.assign(this, data);
    }

    public static get initialState() {
        return new GameState({
            snake: getInitialSnake(5, 5),
            walls: [],
            direction: [1, 0]
        });
    }
}

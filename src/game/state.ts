import { Observable, Subject } from "rxjs";
import { scan } from "rxjs/operators";
import { Snake } from "./snake";
import { Point } from "./point";

class GameState {
  snake: Snake;
  walls: Point[];
  direction: [number, number];

  constructor(data: Partial<GameState>) {
    Object.assign(this, data);
  }

  public static get initialState() {
    return new GameState({
      snake: Snake.getInitialSnake(5, 5),
      walls: [],
      direction: [1, 0]
    });
  }
}

abstract class Action {}

export class AteAction extends Action {
  constructor() {
    super();
  }
}

export class UpdateAction extends Action {
  constructor() {
    super();
  }
}

export class ChangeDirectionAction extends Action {
  constructor(public newDirection: [number, number]) {
    super();
  }
}

export const stateChanges = new Subject<Action>();
export const gameState = stateChanges.pipe(
  scan((previousState: GameState, action: Action) => {
    let newState = { ...previousState };

    if (action instanceof AteAction) {
      // todo:
    } else if (action instanceof UpdateAction) {
      newState = { ...newState, snake: previousState.snake.move(previousState.direction)}
    } else if (action instanceof ChangeDirectionAction) {
      newState = { ...newState, direction: action.newDirection };
    }

    return newState;
  }, GameState.initialState)
);

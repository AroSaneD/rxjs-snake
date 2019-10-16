import { Observable, Subject } from 'rxjs';
import { scan } from 'rxjs/operators';
import { Snake } from '../game/snake';
import { Point } from '../game/point';

import { GameState } from './game-state';
import * as actions from './actions';

export * from './actions';
export const stateChanges = new Subject<actions.Action>();

export const gameState = stateChanges.pipe(
    scan((previousState: GameState, action: actions.Action) => {
        let newState = { ...previousState };

        if (action instanceof actions.AteAction) {
            // todo:
        } else if (action instanceof actions.UpdateAction) {
            const newSnake = previousState.snake.move(previousState.direction);
            newState = { ...newState, snake: newSnake };
        } else if (action instanceof actions.ChangeDirectionAction) {
            newState = { ...newState, direction: action.newDirection };
        }

        return newState;
    }, GameState.initialState)
);

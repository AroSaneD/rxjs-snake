import { interval, timer } from 'rxjs';
import { map, take, withLatestFrom } from 'rxjs/operators';

import { getLatestDirectionObservable } from './src/controls/latestDirection';

import * as state from './src/state';
import { DirectionEnum } from './src/model/direction';

const c = document.getElementById('game') as HTMLCanvasElement;
const ctx = c.getContext('2d');

getLatestDirectionObservable(DirectionEnum.right)
    .pipe(map(dir => new state.ChangeDirectionAction(dir)))
    .subscribe(action => state.stateChanges.next(action));

interval(200)
    .pipe(
        take(10),
        map(_ => new state.UpdateAction())
    )
    .subscribe(a => state.stateChanges.next(a));

state.gameState.subscribe(s => {
    ctx.clearRect(0, 0, 500, 500);
    s.snake.draw(ctx);
});

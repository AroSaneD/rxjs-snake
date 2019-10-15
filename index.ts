import { interval, timer } from "rxjs";
import { map, take, withLatestFrom } from "rxjs/operators";

import { Snake } from "./game/snake";
import { latestDirectionObs } from "./controls/latestDirection";

import {
  UpdateAction,
  ChangeDirectionAction,
  gameState,
  stateChanges
} from "./game/state";

const c = document.getElementById("game") as HTMLCanvasElement;
const ctx = c.getContext("2d");

latestDirectionObs.subscribe(direction =>
  stateChanges.next(new ChangeDirectionAction(direction))
);

interval(200)
  .pipe(take(10))
  .subscribe(() => stateChanges.next(new UpdateAction()));

gameState.subscribe(s => {
  ctx.clearRect(0, 0, 500, 500);
  s.snake.draw(ctx);
});

import { Observable, fromEvent } from "rxjs";
import { map, filter, startWith } from "rxjs/operators";

const keyToDirection: (v: number) => [number, number] = (keyCode: number) => {
  switch (keyCode) {
    case 37:
      return [-1, 0];
    case 38:
      return [0, -1];
    case 39:
      return [1, 0];
    case 40:
      return [0, 1];
    default:
      return null;
  }
};

export const latestDirectionObs: Observable<[number, number]> = fromEvent(
  document,
  "keyup"
).pipe(
  map((x: any) => x.keyCode),
  map(keyToDirection),
  filter(x => !!x),
  startWith([1, 0])
);

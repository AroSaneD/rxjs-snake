import { Observable, fromEvent } from "rxjs";
import { map, filter, startWith } from "rxjs/operators";

const keyToKeyCode = (x: any) =>
    x.keyCode as number;

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

const latestDirectionObs: Observable<[number, number]> = fromEvent(
    document,
    "keyup"
).pipe(
    map(keyToKeyCode),
    map(keyToDirection),
    filter(x => !!x) // Remove null values (keys that weren't expected)
);

export const getLatestDirectionObservable = (startingDirection: [number, number]) =>
    latestDirectionObs.pipe(startWith(startingDirection));
import { Observable, fromEvent } from 'rxjs';
import { map, filter, startWith } from 'rxjs/operators';
import { KeyCode } from '../model/keyCode';
import { DirectionEnum, Direction } from '../model/direction';

const keyToKeyCode = (x: any) => x.keyCode as KeyCode;

const keyToDirection: (v: number) => Direction = (keyCode: number) => {
    switch (keyCode) {
        case 37:
            return DirectionEnum.left;
        case 38:
            return DirectionEnum.down;
        case 39:
            return DirectionEnum.right;
        case 40:
            return DirectionEnum.up;
        default:
            return null;
    }
};

const latestDirectionObs: Observable<Direction> = fromEvent(
    document,
    'keyup'
).pipe(
    map(keyToKeyCode),
    map(keyToDirection),
    filter(x => !!x) // Remove null values (keys that weren't expected)
);

export const getLatestDirectionObservable = (startingDirection: Direction) =>
    latestDirectionObs.pipe(startWith(startingDirection));

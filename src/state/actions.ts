import { Direction } from '../model/direction';

export abstract class Action {}

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
    constructor(public newDirection: Direction) {
        super();
    }
}

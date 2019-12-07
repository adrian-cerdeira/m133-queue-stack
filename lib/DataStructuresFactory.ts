import { Queue } from './Queue';
import { Stack } from './Stack';
import { DataStructures } from './DataStructures';

export class DataStructuresFactory {

    public create(typ: DataStructures) {
        const isQueue = typ === DataStructures.Queue;
        return isQueue ? new Queue() : new Stack();
    }

}
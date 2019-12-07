import { Queue } from './Queue';
import { DataStructures } from './DataStructures';

export class DataStructuresFactory {

    public create(typ: DataStructures) {
        const isQueue = typ === DataStructures.Queue;
        return isQueue ? new Queue() : null;
    }

}
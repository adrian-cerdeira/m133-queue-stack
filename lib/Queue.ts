import { IDataScructure } from "./IDataStructure";

export class Queue implements IDataScructure {
    public queue = [];

    public size(): number {
        return this.queue.length;
    }

    public enqueue(item) {
        this.queue.push(item);;
    }

    public peek() {
        const queueHasItems: boolean = this.queue.length > 0;
        return queueHasItems ? this.queue[0] : null;
    }

    public poll() {
        return this.queue.shift();
    }
}
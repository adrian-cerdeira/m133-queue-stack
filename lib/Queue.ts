import { IDataScructure } from "./IDataStructure";

export class Queue implements IDataScructure {
    public queue = [];
    private offset = 0;

    public size(): number {
        return (this.queue.length - this.offset);
    }

    public enqueue(item) {
        this.queue.push(item);;
    }

    public peek() {
        return (this.queue.length > 0 ? this.queue[this.offset] : undefined);
    }
}
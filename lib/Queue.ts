import { IDataScructure } from "./IDataStructure";

export class Queue implements IDataScructure {
    private queue = [];

    constructor(newQueue: []) {
        this.queue = newQueue;
    }

    public size(): number {
        return this.queue.length;
    }

    public enqueue(item) {
        this.queue.push(item);;
    }

    public peek() {
        return this.isEmpty ? null : this.queue[0];
    }

    public poll() {
        return this.queue.shift();
    }

    public isEmpty() {
        return this.queue.length === 0;
    }
}
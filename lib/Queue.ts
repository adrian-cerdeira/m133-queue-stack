import { IDataScructure } from "./IDataStructure";

export class Queue implements IDataScructure {
    public queue = [];

    constructor(newQueue) {
        this.queue = newQueue;
    }

    public size(): number {
        return this.queue.length;
    }

    public enqueue(item):void {
        this.queue.push(item);;
    }

    public peek() {
        return this.isEmpty() ? null : this.queue[0];
    }

    public poll(): void {
        this.queue.shift();
    }

    public isEmpty(): boolean {
        return this.queue.length === 0;
    }
}
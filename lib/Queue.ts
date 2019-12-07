import { IDataScructure } from "./IDataStructure";

export class Queue implements IDataScructure {
    public queue = [];

    constructor() {
        this.queue = new Array();
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
        return this.queue.shift();
    }

    public isEmpty(): boolean {
        return this.queue.length === 0;
    }
}
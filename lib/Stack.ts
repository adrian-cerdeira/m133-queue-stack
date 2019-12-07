import { IDataScructure } from "./IDataStructure";

export class Stack implements IDataScructure {
    private stack = [];

    constructor() {
        this.stack = new Array();
    }

    public size(): number {
        return this.stack.length;
    }

    public enqueue(item): void {
        this.stack.push(item);;
    }

    public peek() {
        return this.isEmpty() ? null : this.stack[0];
    }

    public poll(): void {
        return this.stack.pop();
    }

    public isEmpty(): boolean {
        return this.stack.length === 0;
    }
}
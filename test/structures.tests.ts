import { expect } from "chai";
import { Queue } from "../lib/Queue";
import { DataStructures } from "../lib/DataStructures";
import { DataStructuresFactory } from "../lib/DataStructuresFactory";

describe("Data structures", () => {
    describe("Queue", () => {
        it("has size", () => {
            const queue = new Queue();
            const result = queue.size();
            expect(result).to.equal(0);
        });

        it("can add", () => {
            const queue = new Queue();
            queue.enqueue("item");
            const result = queue.size();
            expect(result).to.be.equal(1);
        });

        it("queue is empty", () => {
            const queue = new Queue();
            const result = queue.isEmpty();
            expect(result).to.be.equal(true);
        });

        it("queue is not empty", () => {
            const queue = new Queue();
            queue.enqueue("item");
            const result = queue.isEmpty();
            expect(result).to.be.equal(false);
        });

        it("peek next item", () => {
            const item = "item";
            const queue = new Queue();
            queue.enqueue(item);
            const result = queue.peek();
            expect(result).to.be.equal(item);
        });

        it("poll next item", () => {
            const testItem = "item1";
            const testItem2 = "item2";
            const queue = new Queue();
            queue.enqueue(testItem);
            queue.enqueue(testItem2);
            const removed = queue.poll();
            const remaining = queue.peek();
            expect(removed).to.be.equal(testItem);
            expect(remaining).to.be.equal(testItem2);
        })
    })

    describe("Factory", () => {
        it("can create Queue", () => {
            const factory = new DataStructuresFactory();
            const structureType = DataStructures.Queue;
            const result = factory.create(structureType);
            expect(result).to.be.an.instanceOf(Queue);
        })
    })
})
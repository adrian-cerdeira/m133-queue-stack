import { expect } from "chai";
import { Queue } from "../lib/Queue";

describe("Data structures", () => {
    describe("Queue", () => {
        it("has size", () => {
            const test = new Queue([]);
            const result = test.size();
            expect(result).to.equal(0);
        })
    })

    describe("Queue", () => {
        it("add one item", () => {
            const test = new Queue([]);
            test.enqueue(1);
            const result = test.queue.length;
            expect(result).to.equal(1);
        })
    })

    describe("Queue", () => {
        it("has item", () => {
            const test = new Queue([1]);
            const result = test.peek();
            expect(result).to.equal(1);
        })
    })

    describe("Queue", () => {
        it("has no item", () => {
            const test = new Queue([]);
            const result = test.peek();
            expect(result).to.equal(null);
        })
    })

    describe("Queue", () => {
        it("remove one item", () => {
            const test = new Queue([2, 3]);
            test.poll();
            const result = test.queue.length;
            expect(result).to.equal(1);
        })
    })

    // describe("Factory", () => {
    //     it("can create Queue", () => {
    //         const structureType = DataStructures.Queue;
    //         const result = DataStructureFactory.create(structureType);
    //         expect(result).to.be.an.instanceOf(Queue);
    //     })
    // })
})
import { expect } from "chai";
import { Queue } from "../lib/Queue";

describe("Data structures", () => {
    describe("Queue", () => {
        it("has size", () => {
            const test = new Queue();
            const result = test.size();
            expect(result).to.equal(0);
        })
    })

    describe("Queue", () => {
        it("not has peek", () => {
            const test = new Queue();
            const result = test.peek();
            expect(result).to.equal(undefined);
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
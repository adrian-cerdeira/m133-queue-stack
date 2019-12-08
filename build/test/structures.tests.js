"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var chai_1 = require("chai");
var Queue_1 = require("../lib/Queue");
var Stack_1 = require("../lib/Stack");
var DataStructures_1 = require("../lib/DataStructures");
var DataStructuresFactory_1 = require("../lib/DataStructuresFactory");
describe("Data structures", function () {
    describe("Queue", function () {
        it("has size", function () {
            var queue = new Queue_1.Queue();
            var result = queue.size();
            chai_1.expect(result).to.equal(0);
        });
        it("can add", function () {
            var queue = new Queue_1.Queue();
            queue.enqueue("item");
            var result = queue.size();
            chai_1.expect(result).to.be.equal(1);
        });
        it("queue is empty", function () {
            var queue = new Queue_1.Queue();
            var result = queue.isEmpty();
            chai_1.expect(result).to.be.equal(true);
        });
        it("queue is not empty", function () {
            var queue = new Queue_1.Queue();
            queue.enqueue("item");
            var result = queue.isEmpty();
            chai_1.expect(result).to.be.equal(false);
        });
        it("peek next item", function () {
            var item = "item";
            var queue = new Queue_1.Queue();
            queue.enqueue(item);
            var result = queue.peek();
            chai_1.expect(result).to.be.equal(item);
        });
        it("poll next item", function () {
            var testItem = "item1";
            var testItem2 = "item2";
            var queue = new Queue_1.Queue();
            queue.enqueue(testItem);
            queue.enqueue(testItem2);
            var removed = queue.poll();
            var remaining = queue.peek();
            chai_1.expect(removed).to.be.equal(testItem);
            chai_1.expect(remaining).to.be.equal(testItem2);
        });
    });
    describe("Factory", function () {
        it("can create Queue", function () {
            var factory = new DataStructuresFactory_1.DataStructuresFactory();
            var structureType = DataStructures_1.DataStructures.Queue;
            var result = factory.create(structureType);
            chai_1.expect(result).to.be.an.instanceOf(Queue_1.Queue);
        });
        it("can create Stack", function () {
            var factory = new DataStructuresFactory_1.DataStructuresFactory();
            var structureType = DataStructures_1.DataStructures.Stack;
            var result = factory.create(structureType);
            chai_1.expect(result).to.be.an.instanceOf(Stack_1.Stack);
        });
    });
    describe("Stack", function () {
        it("has size", function () {
            var stack = new Stack_1.Stack();
            var result = stack.size();
            chai_1.expect(result).to.equal(0);
        });
        it("can add", function () {
            var stack = new Stack_1.Stack();
            stack.enqueue("item");
            var result = stack.size();
            chai_1.expect(result).to.be.equal(1);
        });
        it("stack is empty", function () {
            var stack = new Stack_1.Stack();
            var result = stack.isEmpty();
            chai_1.expect(result).to.be.equal(true);
        });
        it("stack is not empty", function () {
            var stack = new Stack_1.Stack();
            stack.enqueue("item");
            var result = stack.isEmpty();
            chai_1.expect(result).to.be.equal(false);
        });
        it("peek next item", function () {
            var item = "item";
            var stack = new Stack_1.Stack();
            stack.enqueue(item);
            var result = stack.peek();
            chai_1.expect(result).to.be.equal(item);
        });
        it("poll next item", function () {
            var testItem = "item1";
            var testItem2 = "item2";
            var stack = new Stack_1.Stack();
            stack.enqueue(testItem);
            stack.enqueue(testItem2);
            var removed = stack.poll();
            var remaining = stack.peek();
            chai_1.expect(removed).to.be.equal(testItem2);
            chai_1.expect(remaining).to.be.equal(testItem);
        });
    });
});
//# sourceMappingURL=structures.tests.js.map
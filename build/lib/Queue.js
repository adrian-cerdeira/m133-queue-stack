"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Queue = (function () {
    function Queue() {
        this.queue = [];
        this.queue = new Array();
    }
    Queue.prototype.size = function () {
        return this.queue.length;
    };
    Queue.prototype.enqueue = function (item) {
        this.queue.push(item);
        ;
    };
    Queue.prototype.peek = function () {
        return this.isEmpty() ? null : this.queue[0];
    };
    Queue.prototype.poll = function () {
        return this.queue.shift();
    };
    Queue.prototype.isEmpty = function () {
        return this.queue.length === 0;
    };
    return Queue;
}());
exports.Queue = Queue;
//# sourceMappingURL=Queue.js.map
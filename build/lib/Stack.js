"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Stack = (function () {
    function Stack() {
        this.stack = [];
        this.stack = new Array();
    }
    Stack.prototype.size = function () {
        return this.stack.length;
    };
    Stack.prototype.enqueue = function (item) {
        this.stack.push(item);
        ;
    };
    Stack.prototype.peek = function () {
        return this.isEmpty() ? null : this.stack[0];
    };
    Stack.prototype.poll = function () {
        return this.stack.pop();
    };
    Stack.prototype.isEmpty = function () {
        return this.stack.length === 0;
    };
    return Stack;
}());
exports.Stack = Stack;
//# sourceMappingURL=Stack.js.map
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Queue_1 = require("./Queue");
var Stack_1 = require("./Stack");
var DataStructures_1 = require("./DataStructures");
var DataStructuresFactory = (function () {
    function DataStructuresFactory() {
    }
    DataStructuresFactory.prototype.create = function (typ) {
        var isQueue = typ === DataStructures_1.DataStructures.Queue;
        return isQueue ? new Queue_1.Queue() : new Stack_1.Stack();
    };
    return DataStructuresFactory;
}());
exports.DataStructuresFactory = DataStructuresFactory;
//# sourceMappingURL=DataStructuresFactory.js.map
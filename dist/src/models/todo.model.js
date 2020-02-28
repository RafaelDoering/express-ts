"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const todoSchema = new mongoose_1.Schema({
    text: String,
    done: Boolean,
});
const Todo = mongoose_1.model('Todo', todoSchema);
exports.default = Todo;

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const todo_router_1 = require("./todo.router");
const router = express_1.Router();
router.use('/todos', todo_router_1.default);
exports.default = router;

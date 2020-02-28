"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const todo_model_1 = require("../models/todo.model");
const todoController = {
    create: (req, res) => {
        const { text, done } = req.body;
        todo_model_1.default.create({ text, done }, (err, createdTodo) => {
            if (err) {
                return res.status(400).json({ error: 'Não foi possível criar o To-Do.' });
            }
            return res.status(200).json(createdTodo);
        });
    },
    list: (req, res) => {
        todo_model_1.default.find({}, (err, todos) => {
            if (err) {
                return res.status(400).json({ error: 'Não foi possível listar os To-Do\'s.' });
            }
            return res.status(200).json(todos);
        });
    },
    update: (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        const { id } = req.params;
        const { text, done } = req.body;
        todo_model_1.default.findByIdAndUpdate(id, { text, done }, (err, updatedTodo) => {
            if (err) {
                return res.status(400).json({ error: 'Não foi atualizar o To-Do.' });
            }
            return res.status(200).json(updatedTodo);
        });
    }),
    del: (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        const { id } = req.params;
        todo_model_1.default.findByIdAndDelete(id, (err, deletedTodo) => {
            if (err) {
                return res.status(400).json({ error: 'Não foi possivel deletar o To-Do.' });
            }
            return res.status(200).json(deletedTodo);
        });
    }),
};
exports.default = todoController;

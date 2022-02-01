"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.LIST = void 0;
const mutation_1 = __importDefault(require("./mutation"));
const query_1 = __importDefault(require("./query"));
const type_1 = __importDefault(require("./type"));
exports.LIST = [];
const resolvers = Object.assign(Object.assign(Object.assign({}, query_1.default), mutation_1.default), type_1.default);
exports.default = resolvers;

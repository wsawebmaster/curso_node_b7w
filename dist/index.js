"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const matematica_1 = __importDefault(require("./matematica"));
let n1 = 10;
let n2 = 2;
console.log(`SOMA: ${matematica_1.default.somar(n1, n2)}`);
console.log(`SUBTRAÇÃO: ${matematica_1.default.subtrair(n1, n2)}`);
console.log(`MULTIPLICAÇÃO: ${matematica_1.default.multiplicar(n1, n2)}`);

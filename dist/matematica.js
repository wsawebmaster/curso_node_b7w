"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.multiplicar = exports.subtrair = exports.somar = exports.versao = void 0;
exports.versao = '1.0';
function somar(x, y) {
    return x + y;
}
exports.somar = somar;
function subtrair(x, y) {
    return x - y;
}
exports.subtrair = subtrair;
function multiplicar(x, y) {
    return x * y;
}
exports.multiplicar = multiplicar;
exports.default = {
    somar,
    subtrair,
    multiplicar,
    versao: exports.versao
};

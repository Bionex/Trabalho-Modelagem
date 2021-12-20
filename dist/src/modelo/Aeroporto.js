"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//Aeroporto.js
class Aeroporto {
    constructor(id, nome, estado, cidade) {
        this._id = id;
        this._nome = nome;
        this._estado = estado;
        this._cidade = cidade;
    }
    get nome() {
        return this._nome;
    }
    get estado() {
        return this._estado;
    }
    get cidade() {
        return this._cidade;
    }
}
exports.default = Aeroporto;

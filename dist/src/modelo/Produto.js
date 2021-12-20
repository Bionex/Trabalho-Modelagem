"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//Produto.js
class Produto {
    constructor(id, nome) {
        this.id = id;
        this.nome = nome;
        this.vendas = new Array();
    }
    adicionar(v) {
        this.vendas.push(v);
    }
}
exports.default = Produto;

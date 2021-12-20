"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
//Cliente.js
const Pessoa_1 = __importDefault(require("./Pessoa"));
class Cliente extends Pessoa_1.default {
    constructor(cpf, rg, nome, endereco, telefone, indicacao) {
        super(cpf, rg, nome, endereco, telefone);
        this.indicacao = indicacao;
        this.vendas = new Array();
    }
    adicionar(v) {
        this.vendas.push(v);
    }
    isIndicado() {
        return this.indicacao;
    }
}
exports.default = Cliente;

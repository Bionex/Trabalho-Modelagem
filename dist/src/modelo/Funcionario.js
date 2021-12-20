"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Pessoa_1 = __importDefault(require("./Pessoa"));
//Funcionario.js
class Funcionario extends Pessoa_1.default {
    constructor(cpf, rg, nome, endereço, telefone, salario, data_contratacao, senha) {
        super(cpf, rg, nome, endereço, telefone);
        this.salario = salario;
        this.data_contratacao = data_contratacao;
        this.senha = senha;
    }
}
exports.default = Funcionario;

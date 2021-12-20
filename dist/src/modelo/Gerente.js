"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Funcionario_1 = __importDefault(require("./Funcionario"));
//Gerente.js
class Gerente extends Funcionario_1.default {
    constructor(cpf, rg, nome, endereço, telefone, salario, data_contratação, senha) {
        super(cpf, rg, nome, endereço, telefone, salario, data_contratação, senha);
    }
}
exports.default = Gerente;

"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Funcionario_1 = __importDefault(require("./Funcionario"));
//Piloto.js
class Piloto extends Funcionario_1.default {
    constructor(cpf, rg, nome, endereço, telefone, salario, data_contratação, senha, breve) {
        super(cpf, rg, nome, endereço, telefone, salario, data_contratação, senha);
        this.breve = breve;
        this.vendas = new Array();
    }
    adicionar(v) {
        this.vendas.push(v);
    }
    isDisponivel(ini, fim) {
        var vendasFiltradas = this.vendas.filter(venda => {
            var data = venda.dataHora;
            if (data > ini && data < fim)
                return venda;
        });
        return vendasFiltradas.length == 0;
    }
}
exports.default = Piloto;

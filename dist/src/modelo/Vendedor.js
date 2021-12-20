"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Funcionario_1 = __importDefault(require("./Funcionario"));
const Status_1 = require("./Status");
//Vendedor.js
class Vendedor extends Funcionario_1.default {
    constructor(cpf, rg, nome, endereço, telefone, salario, data_contratação, senha) {
        super(cpf, rg, nome, endereço, telefone, salario, data_contratação, senha);
        this.vendas = new Array();
    }
    adicionar(v) {
        this.vendas.push(v);
    }
    obterQtdeVendas() {
        return this.vendas.length;
    }
    obterQtdeVendasPerdidas(ini, fim) {
        var vendasFitlradas = this.vendas.filter(venda => {
            var data = venda.dataHora;
            if (data > ini && data < fim)
                return venda;
        });
        var qtdPerdida = 0;
        vendasFitlradas.forEach(venda => {
            if (venda.status == Status_1.Status.CANCELADA) {
                qtdPerdida++;
            }
        });
        return qtdPerdida;
    }
}
exports.default = Vendedor;

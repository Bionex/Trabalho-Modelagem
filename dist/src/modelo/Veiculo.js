"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//Veiculo.js
class Veiculo {
    constructor(identificador, nome) {
        this.identificador = identificador;
        this.nome = nome;
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
exports.default = Veiculo;

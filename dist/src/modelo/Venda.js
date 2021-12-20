"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//Venda.js
class Venda {
    constructor(protocolo, dataHora, valor, duracao, atrasado, status, produto, veiculo, origem, destino, piloto) {
        this._protocolo = protocolo;
        this._dataHora = dataHora;
        this._valor = valor;
        this._duracao = duracao;
        this._atrasado = atrasado;
        this._status = status;
        this._produto = produto;
        this._veiculo = veiculo;
        this._origem = origem;
        this._destino = destino;
        this._piloto = piloto;
    }
    set atrasado(b) {
        this._atrasado = b;
    }
    set status(s) {
        this._status = s;
    }
    get produto() {
        return this._produto;
    }
    get status() {
        return this._status;
    }
    get dataHora() {
        return this._dataHora;
    }
    gerarPDFContrato() {
        //TODO
    }
}
exports.default = Venda;

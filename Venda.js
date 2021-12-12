//Venda.js
module.exports = class Venda {
    
    constructor(protocolo, dataHora, valor, duracao, atrasado, status) {
        this.protocolo = protocolo;
        this.dataHora = dataHora;
        this.valor = valor;
        this.duracao = duracao;
        this.atrasado = atrasado;
        this.status = status
    }

   alterarDataHora(dt){
        this.dataHora = dt
    }

    alterarValor(v){
        this.valor = v
    }

    alterarDuracao(d){
        this.duracao = d
    }

    alterarAtrasado(a){
        this.atrasado = a
    }

    alterarStatus(s){
        this.status = s
    }

    gerarPDFContrato(){
        //waiting
    }
}
//Funcionario.js
module.exports = class Funcionario extends Pessoa{
    
    constructor(cpf, rg, nome, endereço, telefone, salario, data_contratação, senha) {
        this.super(cpf,rg,nome, endereço, telefone);
        this.salario = salario;
        this.data_contratação = data_contratação;
        this.senha = senha
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
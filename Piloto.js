const Funcionario = require("./Funcionario");

//Piloto.js
module.exports = class Piloto extends Funcionario{
    
    constructor(cpf, rg, nome, endereço, telefone, salario, data_contratação, senha, breve) {
        this.super(cpf,rg,nome, endereço, telefone, salario, data_contratação, senha);
        this.breve = breve;
    }

    alterarNome(nome){
        this.nome = nome;
    }

    alterarEndereco(end){
        this.end = end;
    }

    alterarTelefone(tel){
        this.tel = tel
    }

    alterarCpf(cpf){
        this.cpf = cpf
    }

    alterarSalario(salario){
        this.salario = salario
    }
    
    alterarSenha(senha){
        this.senha = senha
    }

    adicionarVenda(venda){
      // TODO
    }

    obterHorasVoadas(dataInicio, dataFim){
      // TODO
    }
}
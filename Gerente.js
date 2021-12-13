const Funcionario = require("./Funcionario");

//Gerente.js
module.exports = class Gerente extends Funcionario{
    
    constructor(cpf, rg, nome, endereço, telefone, salario, data_contratação, senha) {
        this.super(cpf,rg,nome, endereço, telefone, salario, data_contratação, senha);
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
}
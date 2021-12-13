const Funcionario = require("./Funcionario");

//Vendedor.js
module.exports = class Vendedor extends Funcionario{
    
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

    verificarCpf(cpf){
        //TODO
    }

    alterarSalario(salario){
        this.salario = salario
    }
    
    alterarSenha(senha){
        this.senha = senha
    }

    adicionarVenda(venda){
        //TODO
    }

    obterQtdeVendas(){
        //TODO
        return qtDeVendas;
    }
}
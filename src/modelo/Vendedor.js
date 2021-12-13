const Funcionario = require("./Funcionario");

//Vendedor.js
module.exports = class Vendedor extends Funcionario{
    
    constructor(cpf, rg, nome, endereço, telefone, salario, data_contratação, senha) {
        super(cpf,rg,nome, endereço, telefone, salario, data_contratação, senha);
        this.vendas = new Array()
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
        this.vendas.push(venda)
    }

    obterQtdeVendas(){
        return this.vendas.length
    }
}
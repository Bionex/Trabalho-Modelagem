const Funcionario = require("./Funcionario");
const Venda = require("./Venda");

//Piloto.js
module.exports = class Piloto extends Funcionario{
    
    constructor(cpf, rg, nome, endereço, telefone, salario, data_contratação, senha, breve) {
        super(cpf,rg,nome, endereço, telefone, salario, data_contratação, senha);
        this.breve = breve;

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

    obterHorasVoadas(dataInicio, dataFim){
      // TODO
    }
}
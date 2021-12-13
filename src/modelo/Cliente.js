//Cliente.js
const Pessoa = require("./Pessoa");
 
module.exports = class Cliente extends Pessoa {
    constructor(cpf, rg, nome, endereco, telefone,indicacao) {
        super(cpf, rg, nome, endereco, telefone)
        this.indicacao = indicacao;

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

    adicionarVenda(venda)
    {
        this.vendas.push(venda)
    }
}
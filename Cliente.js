//Cliente.js
modules.exports = class Cliente extends Pessoa {
    constructor(indicacao) {
        this.indicacao = indicacao;
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
        this.venda = venda;
    }
}
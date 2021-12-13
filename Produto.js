//Produto.js
module.exports = class Produto {
    constructor(id, nome) {
        this.id = id;
        this.nome = nome;
    }

    alterarNome(nome)
    {
        this.nome = nome;
    }
}
//Pessoa.js
module.exports = class Pessoa {
    constructor(cpf, rg, nome, endereco, telefone) {
        if (this.constructor === Pessoa) {
            throw new Error("Abstract classes can't be instantiated.");
        }
        this.cpf = cpf;
        this.rg = rg;
        this.nome = nome;
        this.endereco = endereco;
        this.telefone = telefone;
    }
    alterarNome() {
        throw new Error("Method 'alterarNome()' must be implemented.");
    }
    alterarEndereco() {
        throw new Error("Method 'alterarEndereco()' must be implemented.");
    }
    alterarTelefone() {
        throw new Error("Method 'alterarTelefone()' must be implemented.");
    }
    verificarCpf() {
        throw new Error("Method 'verificarCpf()' must be implemented.");
    }
};
//# sourceMappingURL=Pessoa.js.map
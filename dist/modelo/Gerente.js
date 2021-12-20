const Funcionario = require("./Funcionario");
//Gerente.js
module.exports = class Gerente extends Funcionario {
    constructor(cpf, rg, nome, endereço, telefone, salario, data_contratação, senha) {
        super(cpf, rg, nome, endereço, telefone, salario, data_contratação, senha);
    }
    alterarNome(nome) {
        this.nome = nome;
    }
    alterarEndereco(end) {
        this.end = end;
    }
    alterarTelefone(tel) {
        this.tel = tel;
    }
    verificarCpf(cpf) {
        //TODO
    }
    alterarSalario(salario) {
        this.salario = salario;
    }
    alterarSenha(senha) {
        this.senha = senha;
    }
};
//# sourceMappingURL=Gerente.js.map
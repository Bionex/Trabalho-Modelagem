const Pessoa = require("./Pessoa");

//Funcionario.js
module.exports = class Funcionario extends Pessoa{
    
    constructor(cpf, rg, nome, endereço, telefone, salario, data_contratação, senha) {
        super(cpf,rg,nome, endereço, telefone);
        if(this.constructor == Funcionario)
            throw new Error("Abstract classes can't be instantiated.");
        
        this.salario = salario;
        this.data_contratação = data_contratação;
        this.senha = senha
    }

    alterarSalario(){
        throw new Error("Method 'alterarSalario()' must be implemented.")
    }
    
    alterarSenha(){
        throw new Error("Method 'alterarSenha()' must be implemented.")
    }
}
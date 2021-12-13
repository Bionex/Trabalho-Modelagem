const Pessoa = require("./Pessoa");

//Funcionario.js
module.exports = class Funcionario extends Pessoa{
    
    constructor(cpf, rg, nome, endereço, telefone, salario, data_contratação, senha) {
        if(this.constructor == Funcionario)
            throw new Error("Abstract classes can't be instantiated.");
        
        this.super(cpf,rg,nome, endereço, telefone);
        this.salario = salario;
        this.data_contratação = data_contratação;
        this.senha = senha
    }

    alterarNome(){
        throw new Error("Method 'alterarNome()' must be implemented.");
    }

    alterarEndereco(){
        throw new Error("Method 'alterarEndereco()' must be implemented.");
    }

    alterarTelefone(){
        throw new Error("Method 'alterarTelefone()' must be implemented.");
    }

    verificarCpf(){
        throw new Error("Method 'verificarCpf()' must be implemented.");
    }

    alterarSalario(){
        throw new Error("Method 'alterarSalario()' must be implemented.")
    }
    
    alterarSenha(){
        throw new Error("Method 'alterarSenha()' must be implemented.")
    }
}
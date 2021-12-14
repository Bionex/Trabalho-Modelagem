import Pessoa from "./Pessoa"

//Funcionario.js
export default abstract class Funcionario extends Pessoa{
    salario: number;
    dataContratacao: Date;
    senha: string;

    constructor(cpf: string, rg: string, nome:string,
                endereço: string, telefone: string, salario: number,
                dataContratacao: Date, senha: string) {
        super(cpf,rg,nome, endereço, telefone);
        this.salario = salario;
        this.dataContratacao = dataContratacao;
        this.senha = senha
    }
}
import Pessoa from "./Pessoa"

//Funcionario.js
export default abstract class Funcionario extends Pessoa{
    salario: number;
    data_contratacao: Date;
    senha: string;

    constructor(cpf: string, rg: string, nome:string, endereço: string, telefone: string, salario: number, data_contratacao: Date, senha: string) {
        super(cpf,rg,nome, endereço, telefone);
        this.salario = salario;
        this.data_contratacao = data_contratacao;
        this.senha = senha
    }
}
//Pessoa.js
export default abstract class Pessoa {
    cpf:string
    rg:string
    nome:string
    endereco:string
    telefone:string


    constructor(cpf:string, rg:string, nome:string, endereco:string, telefone:string) {
        this.cpf = cpf;
        this.rg = rg;
        this.nome = nome;
        this.endereco = endereco;
        this.telefone = telefone;
    }   
}
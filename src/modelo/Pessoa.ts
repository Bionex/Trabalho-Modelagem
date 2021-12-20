//Pessoa.js
export default abstract class Pessoa {
    private cpf:string
    private rg:string
    private nome:string
    private endereco:string
    private telefone:string


    constructor(cpf:string, rg:string, nome:string, endereco:string, telefone:string) {
        this.cpf = cpf;
        this.rg = rg;
        this.nome = nome;
        this.endereco = endereco;
        this.telefone = telefone;
    }   
}
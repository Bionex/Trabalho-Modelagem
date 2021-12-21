//Pessoa.js
export default abstract class Pessoa {
    private _cpf:string
    private _rg:string
    private _nome:string
    private _endereco:string
    private _telefone:string

    constructor(cpf:string, rg:string, nome:string, endereco:string, telefone:string) {
        this._cpf = cpf;
        this._rg = rg;
        this._nome = nome;
        this._endereco = endereco;
        this._telefone = telefone;
    }   

    public get cpf() {
        return this._cpf
    }

    public get nome() {
        return this._nome
    }

    public get rg() {
        return this._rg
    }

    public get telefone() {
        return this._telefone
    }

    public get endereco() {
        return this._endereco
    }
}
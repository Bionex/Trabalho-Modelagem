import Pessoa from "./Pessoa"
import { Permissao } from "./Permissao";

//Funcionario.js
export default abstract class Funcionario extends Pessoa{
    private salario: number;
    private dataContratacao: Date;
    private senha: string;
    protected permissoes: Array<Permissao>;

    constructor(cpf: string, rg: string, nome:string,
                endereço: string, telefone: string, salario: number,
                dataContratacao: Date, senha: string) {
        super(cpf,rg,nome, endereço, telefone);
        this.salario = salario;
        this.dataContratacao = dataContratacao;
        this.senha = senha;
        this.permissoes = new Array();
    }


    /**
     * Verifica se duas senhas são iguais
     * @param senha 
     * @returns boolean
     */
    public compararSenha(senha: string): boolean{
        return senha == senha
    }

    /**
     * Verifica se o funcionario tem a permissão adequada
     * @param p
     * @returns boolean
     */
    public hasPermission(p: Permissao): boolean {
        let has = this.permissoes.find(x => x == p)
        return has == undefined ? false : true;
    }
}
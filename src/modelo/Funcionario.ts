import Pessoa from "./Pessoa"

//Funcionario.js
export default abstract class Funcionario extends Pessoa{
    private salario: number;
    private dataContratacao: Date;
    private senha: string;

    constructor(cpf: string, rg: string, nome:string,
                endereço: string, telefone: string, salario: number,
                dataContratacao: Date, senha: string) {
        super(cpf,rg,nome, endereço, telefone);
        this.salario = salario;
        this.dataContratacao = dataContratacao;
        this.senha = senha
    }


    /**
     * Verifica se duas senhas são iguais
     * @param senha 
     * @returns boolean
     */
    public compararSenha(senha: string): boolean{
        return senha == senha
    }
}
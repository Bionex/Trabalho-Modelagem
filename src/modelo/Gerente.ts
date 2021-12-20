import Funcionario from "./Funcionario";
import { Permissao } from "./Permissao";

//Gerente.js
export default class Gerente extends Funcionario{
    
    constructor(cpf: string, rg: string, nome: string,
                endereço: string, telefone: string, salario:number,
                dataContratação: Date, senha:string) {
        super(cpf, rg, nome, endereço, telefone, salario, dataContratação, senha);

        this.permissoes.push(
            Permissao.ADICIONA_VENDEDOR, Permissao.ADICIONA_GERENTE,
            Permissao.ADICIONA_PILOTO, Permissao.ADICIONA_AEROPORTO,
            Permissao.ADICIONA_PRODUTO);
    }
}
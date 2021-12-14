import Funcionario from "./Funcionario"
import Venda from "./Venda"
import {isEqual} from "../Utils"

//Piloto.js
export default class Piloto extends Funcionario{
    breve:string;
    vendas:Array<Venda>


    constructor(cpf:string, rg:string, nome:string,
                endereço:string, telefone:string, salario:number,
                dataContratação:Date, senha:string, breve:string) {
        super(cpf,rg,nome, endereço, telefone, salario, dataContratação, senha);
        this.breve = breve;

        this.vendas = new Array()
    }

    /**
     * Persiste uma venda no piloto
     * @param v 
     */
    adicionar(v: Venda){
      this.vendas.push(v)
    }

    /**
     * Verifica se o piloto está disponível em algum dia
     * @param data 
     * @returns boolean
     */
    isDisponivel(data: Date): boolean{
        let v = this.vendas.find(v => isEqual(v.dataHora, data))
        return v != undefined;
    }
}
import Funcionario from "./Funcionario"
import { Status } from "./Status";
import Venda from "./Venda";


//Vendedor.js
export default class Vendedor extends Funcionario{
    private vendas: Array<Venda>
    
    constructor(cpf:string, rg:string, nome:string,
                endereço:string, telefone:string, salario:number,
               dataContratacao:Date, senha:string) {
        super(cpf,rg,nome, endereço, telefone, salario,dataContratacao, senha);
        this.vendas = new Array()
    }


    /**
     * Persiste uma venda no vendedor
     * @param v venda
     */
    public adicionar(v: Venda){
        this.vendas.push(v)
    }

}
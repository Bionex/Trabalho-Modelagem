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

    /**
     * Calcula quantas vendas um vendedor fez
     * @returns number
     */
    public obterQtdeVendas(): number{
        return this.vendas.length
    }

    /**
     * Calcula a quantidade de vendas de um vendedor que foram perdidas em um periodo
     * @param ini data inicial
     * @param fim data final
     * @returns number
     */
    public obterQtdeVendasPerdidas(ini:Date, fim:Date): number{
        let qtde = 0
        this.vendas.forEach(v => {
            let data = v.dataHora
            if (data > ini && data < fim && 
                v.status == Status.CANCELADA)
                qtde++
        })

        return qtde;
    }
}
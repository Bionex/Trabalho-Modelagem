import Funcionario from "./Funcionario"
import { Status } from "./Status";
import Venda from "./Venda";


//Vendedor.js
export default class Vendedor extends Funcionario{
    vendas: Array<Venda>
    
    constructor(cpf:string, rg:string, nome:string, endereço:string, telefone:string, salario:number, data_contratação:Date, senha:string) {
        super(cpf,rg,nome, endereço, telefone, salario, data_contratação, senha);
        this.vendas = new Array()
    }

  
    adicionar(v: Venda){
        this.vendas.push(v)
    }

    obterQtdeVendas(){
        return this.vendas.length
    }

    obterQtdeVendasPerdidas(ini:Date, fim:Date): number{
        var vendasFitlradas = this.vendas.filter(venda => {
            var data = venda.dataHora;
            if (data > ini && data < fim)
                return venda;
        })

        var qtdPerdida = 0;
        vendasFitlradas.forEach(venda =>{
            if(venda.status == Status.CANCELADA){
                qtdPerdida++;
            }
        })

        return qtdPerdida;
    }
}
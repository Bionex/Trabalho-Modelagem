import Funcionario from "./Funcionario"
import Venda from "./Venda"

//Piloto.js
export default class Piloto extends Funcionario{
    breve:string;
    vendas:Array<Venda>


    constructor(cpf:string, rg:string, nome:string, endereço:string, telefone:string, salario:number, data_contratação:Date, senha:string, breve:string) {
        super(cpf,rg,nome, endereço, telefone, salario, data_contratação, senha);
        this.breve = breve;

        this.vendas = new Array()
    }

    adicionar( v:Venda){
      this.vendas.push(v)
    }

    isDisponivel(ini: Date, fim: Date) : boolean{
        var vendasFiltradas = this.vendas.filter(venda =>{
            var data = venda.dataHora;
            if(data > ini && data < fim)
                return venda;
        })
        return vendasFiltradas.length == 0;
    }
}
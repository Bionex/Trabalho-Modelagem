import Venda from "./Venda";

//Veiculo.js
export default class Veiculo{
    identificador: string;
    nome:string

    vendas: Array<Venda>

    constructor(identificador:string, nome:string) {
        this.identificador = identificador;
        this.nome = nome;

        this.vendas = new Array()
    }

    adicionar(v:Venda){
        this.vendas.push(v);
    }

    isDisponivel(ini: Date, fim: Date): boolean {
        var vendasFiltradas = this.vendas.filter(venda =>{
            var data = venda.dataHora;
            if(data >= ini && data <= fim)
                return venda;
        })

        return vendasFiltradas.length == 0;
    }
}
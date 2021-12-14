import Venda from "./Venda"
//Produto.js
export default class Produto {
    id:number;
    nome:string;

    vendas:Array<Venda>

    constructor(id:number, nome:string) {
        this.id = id;
        this.nome = nome;

        this.vendas = new Array()
    }

    adicionar(v:Venda){
        this.vendas.push(v)
    }
}
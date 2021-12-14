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

    /**
     * Persiste uma venda no produto
     * @param v venda
     */
    adicionar(v:Venda){
        this.vendas.push(v)
    }
}
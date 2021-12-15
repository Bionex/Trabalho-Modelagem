import Venda from "./Venda"
//Produto.js
export default class Produto {
    private id:number;
    private nome:string;

    private vendas:Array<Venda>

    constructor(id:number, nome:string) {
        this.id = id;
        this.nome = nome;

        this.vendas = new Array()
    }

    /**
     * Persiste uma venda no produto
     * @param v venda
     */
   public adicionar(v:Venda){
        this.vendas.push(v)
    }
}
import Venda from "./Venda"
//Produto.js
export default class Produto {
    private _id:number;
    private _nome:string;

    private vendas:Array<Venda>

    constructor(id:number, nome:string) {
        this._id = id;
        this._nome = nome;

        this.vendas = new Array()
    }

    /**
     * Persiste uma venda no produto
     * @param v venda
     */
   public adicionar(v:Venda){
        this.vendas.push(v)
   }

    public get id() {
        return this._id
    }

    public get nome() {
        return this._nome
    }
}
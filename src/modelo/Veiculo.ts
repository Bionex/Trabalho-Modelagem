import Venda from "./Venda";
import {isEqual} from "../Utils"

//Veiculo.js
export default class Veiculo{
    private _id: number;
    private _nome:string

    private vendas: Array<Venda>

    constructor(id:number, nome:string) {
        this._id = id;
        this._nome = nome;

        this.vendas = new Array()
    }

    public get id() {
        return this._id
    }

    public get nome() {
        return this._nome
    }

    /**
     * Persiste uma venda em um veiculo
     * @param v venda
     */
   public adicionar(v:Venda){
        this.vendas.push(v);
    }

    /**
     * Verifica se uma aeronave não está ocupada em determinado dia
     * @param date 
     * @returns boolean
     */
    public isDisponivel(date: Date): boolean {
        let v = this.vendas.find(v => isEqual(v.dataHora, date))
        return v == undefined;
    }
}
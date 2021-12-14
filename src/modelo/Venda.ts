import Aeroporto from "./Aeroporto";
import Piloto from "./Piloto";
import Produto from "./Produto";
import {Status} from "./Status"
import Veiculo from "./Veiculo";

//Venda.js
export default class Venda {
    private _protocolo: number;
    private _dataHora: Date;
    private _valor: number;
    private _duracao: number;
    private _atrasado: boolean;
    private _status: Status;
    private _produto: Produto;
    private _veiculo: Veiculo;
    private _origem: Aeroporto;
    private _destino: Aeroporto;
    private _piloto: Piloto;
    
    constructor(protocolo: number, dataHora: Date, valor:number, duracao:number, atrasado: boolean, status: Status, produto: Produto, veiculo: Veiculo, origem:Aeroporto, destino: Aeroporto, piloto: Piloto) {
        this._protocolo = protocolo;
        this._dataHora = dataHora;
        this._valor = valor;
        this._duracao = duracao;
        this._atrasado = atrasado;
        this._status = status;
        
        this._produto = produto;
        this._veiculo = veiculo;
        this._origem = origem;
        this._destino = destino;
        this._piloto = piloto;
    }
  
    public set atrasado(b : boolean) {
        this._atrasado = b;
    }
    
    public set status(s : Status) {
        this._status = s;
    }
       
    public get produto() : Produto {
        return this._produto;
    }
    
    public get status() : Status {
        return this._status;
    }

    
    public get dataHora() : Date {
        return this._dataHora;
    }
    

    gerarPDFContrato(){
        //TODO
    }
}

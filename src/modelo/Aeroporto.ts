//Aeroporto.js
export default class Aeroporto {
    private _id:number;
    private _nome:string; 
    private _estado:string;
    private _cidade:string

    constructor(id:number, nome:string, cidade:string, estado:string) {
        this._id = id;
        this._nome = nome;
        this._estado = estado;
        this._cidade = cidade;
    }

    public get id(): number {
        return this._id
    }

    public get nome() : string {
        return this._nome;
    }

    
    public get estado() : string {
        return this._estado;
    }
    
    public get cidade() : string {
        return this._cidade;
    }
}

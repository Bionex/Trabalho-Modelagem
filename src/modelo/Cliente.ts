//Cliente.js
import Pessoa from "./Pessoa"
import Venda from "./Venda" 

export default class Cliente extends Pessoa {
    indicacao: boolean;
    vendas: Array<Venda>

    constructor(cpf:string, rg:string, nome:string, endereco:string, 
                telefone:string,indicacao:boolean) {
        super(cpf, rg, nome, endereco, telefone)
        this.indicacao = indicacao;

        this.vendas = new Array()
    }


    /**
     * Persiste uma venda no cliente
     * @param v venda
     */
    adicionar(v: Venda)
    {
        this.vendas.push(v)
    }

    public get isIndicado(): boolean{
        return this.indicacao;
    }
}

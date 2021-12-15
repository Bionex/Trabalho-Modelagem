//Cliente.js
import Pessoa from "./Pessoa"
import Venda from "./Venda" 

export default class Cliente extends Pessoa {
    private indicacao: boolean;
    private vendas: Array<Venda>

    constructor(cpf:string, rg:string, nome:string, endereco:string, 
                telefone:string,indicacao:boolean) {
        super(cpf, rg, nome, endereco, telefone)
        this.indicacao = indicacao;

        this.vendas = new Array()
    }


    public get isIndicado(): boolean{
        return this.indicacao;
    }

    /**
     * Persiste uma venda no cliente
     * @param v venda
     */
   public adicionar(v: Venda)
    {
        this.vendas.push(v)
    }
}

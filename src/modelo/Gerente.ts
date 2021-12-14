import Funcionario from "./Funcionario";

//Gerente.js
export default class Gerente extends Funcionario{
    
    constructor(cpf: string, rg: string, nome: string,
                endereço: string, telefone: string, salario:number,
                dataContratação: Date, senha:string) {
        super(cpf, rg, nome, endereço, telefone, salario, dataContratação, senha);
    }
}

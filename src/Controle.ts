import Aeroporto from "./modelo/Aeroporto";
import Cliente from "./modelo/Cliente";
import Funcionario from "./modelo/Funcionario"
import Produto from "./modelo/Produto";
import Veiculo from "./modelo/Veiculo";
import Venda from "./modelo/Venda";
import Vendedor from "./modelo/Vendedor"
import Piloto from "./modelo/Piloto"
import { Status } from "./modelo/Status";



//Controle.js
export default class Controle {
    funcionarios: Map<string, Funcionario>;
    vendas: Map<string, Venda>;
    clientes: Map<string, Cliente>;
    produtos: Map<string, Produto>;
    aeroportos: Map<string, Aeroporto>;
    veiculos: Map<string, Veiculo>;
    login: Funcionario;
    idAeroporto: number;
    idProduto: number;
    protocolo: number;
    idVeiculo: number;


    constructor(){
        this.funcionarios = new Map();
        this.vendas = new Map();
        this.clientes = new Map();
        this.produtos = new Map();
        this.aeroportos = new Map();
        this.veiculos = new Map();
        this.idAeroporto = 0;
        this.idProduto = 0;
        this.protocolo = 0;
        this.idVeiculo = 0;

        this.adicionarVendedor("cpf-vendedor1","rg-vendedor1","nome-vendedor1", "end-vendedor1", "tel-vendedor1",2000, new Date(), "senha-vendedor1" );
        this.login = this.buscarFuncionario("cpf-vendedor1") as Funcionario;
    }

    adicionarVendedor(cpf:string, rg:string , nome:string, endereço:string, telefone:string, salario:number, data_contratação:Date, senha:string){
        var vendedor = new Vendedor(cpf, rg , nome , endereço, telefone, salario , data_contratação, senha)
        this.funcionarios.set(cpf, vendedor)
        
    }

    adicionarPiloto(cpf:string, rg:string , nome:string, endereço:string, telefone:string, salario:number, data_contratação:Date, breve:string,senha:string){
        var piloto = new Piloto(cpf, rg , nome, endereço, telefone, salario, data_contratação, breve, senha)
        this.funcionarios.set(cpf, piloto)
    }

    buscarFuncionario(cpf:string): Funcionario | undefined{  
        return this.funcionarios.get(cpf)!
        
    }

    listarPilotosDisponiveis(data:Date){
        var funcionarios = Array.from(this.funcionarios.values())
        var pilotosDisponiveis = funcionarios.filter(funcionario=>{
            if(typeof Piloto == typeof(funcionario)){
                var amanha = new Date(data.getDate() + 1)
   
                if((funcionario as Piloto).isDisponivel(data, amanha)){
                    return funcionario;
                }
            }
        })
        
        return pilotosDisponiveis;

        
    }

    adicionarCliente(cpf:string, rg:string , nome:string, endereço:string, telefone:string, indicacao:boolean){
        var cliente = new Cliente(cpf, rg , nome , endereço, telefone, indicacao)
        this.clientes.set(cpf, cliente)
    }


    buscarCliente(cpf:string){
        return this.clientes.get(cpf)
    }

    adicionarVenda(dataHora:Date, idOrigem:string, idDestino:string, valor:number, duracao:number, idAeronave:number,
        idProduto: number, cpfsClientes:Array<string>, cpfPiloto:string){
        
        var produto = this.buscarProduto(idProduto.toString());
        var veiculo = this.buscarVeiculo(idAeronave.toString());
        var origem = this.buscarAeroporto(idOrigem.toString());
        var destino = this.buscarAeroporto(idDestino.toString());
        var piloto = this.buscarFuncionario(cpfPiloto.toString()) as Piloto;

        var venda = new Venda(this.protocolo, dataHora, valor, duracao,false, Status.AGUARDANDO, produto!, veiculo!, origem!, destino!, piloto);

        
        this.vendas.set(this.protocolo.toString(),venda);
        (this.login as Vendedor).adicionar(venda);

        cpfsClientes.forEach(cpf => {
            var cliente = this.buscarCliente(cpf);
            if (cliente)
                cliente.adicionar(venda)
        });

        piloto.adicionar(venda);
    }

    buscarVenda(protocolo:string): Venda | undefined{
        return this.vendas.get(protocolo);
    }

    adicionarVeiculo(nome:string){
        var veiculo = new Veiculo(this.idVeiculo.toString(), nome)
        this.veiculos.set(this.idVeiculo.toString(), veiculo);       
    }


    buscarVeiculo(identificador:string){
        return this.veiculos.get(identificador)
    }

    listarVeiculosDisponiveis(data: Date){
        var veiculos = Array.from(this.veiculos.values());
        var veiculosDisponiveis = veiculos.filter(veiculo=>{
            
            var amanha = new Date(data.getDate() + 1)

            if(veiculo.isDisponivel(data, amanha)){
                return veiculo;
            }
        })
        
        return veiculosDisponiveis;
    }

    adicionarProduto(nome:string){
        var produto = new Produto(this.idProduto, nome)
        this.produtos.set(this.idProduto.toString(), produto)
        this.idProduto += 1
    }

    buscarProduto(id:string){
        return this.produtos.get(id)
    }

    adicionarAeroporto(nome:string,cidade:string,estado:string){
        var aeroporto = new Aeroporto(this.idAeroporto , nome, estado, cidade);
        this.aeroportos.set(this.idAeroporto.toString(), aeroporto)
        this.idAeroporto += 1
    }


    buscarAeroporto(id:string){
        return this.aeroportos.get(id)
    }

    listarAeroportos(nome:string, estado:string, cidade:string){
        var aeroportos = Array.from(this.aeroportos.values());
        aeroportos = aeroportos.filter(aeroporto =>{
            if(aeroporto.nome.includes(nome) && aeroporto.estado.includes(estado) && aeroporto.cidade.includes(cidade))
                return aeroporto;
        })

        return aeroportos;
    }

}

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
    vendas: Map<number, Venda>;
    clientes: Map<string, Cliente>;
    produtos: Map<number, Produto>;
    aeroportos: Map<number, Aeroporto>;
    veiculos: Map<number, Veiculo>;
    login: Funcionario;
    idAeroporto: number;
    idProduto: number;
    protocolo: number;
    idVeiculo: number;


    constructor() {
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

        this.adicionarVendedor("cpf-vendedor1", "rg-vendedor1", "nome-vendedor1", 
                               "end-vendedor1", "tel-vendedor1", 2000, 
                               new Date(), "senha-vendedor1");

        this.login = this.buscarFuncionario("cpf-vendedor1") as Funcionario;
    }


    /**
     * Persiste vendedor na controle
     */
    adicionarVendedor(cpf: string, rg: string, nome: string,
        endereço: string, telefone: string, salario: number,
        data_contratação: Date, senha: string) {
            
        if (this.funcionarios.has(cpf))
            return false
        else {
            let vendedor = new Vendedor(cpf, rg, nome,
                endereço, telefone, salario,
                data_contratação, senha)
            this.funcionarios.set(cpf, vendedor)

            return true
        }
    }

    /**
     * Persiste piloto na controle
     */
    adicionarPiloto(cpf: string, rg: string, nome: string,
        endereço: string, telefone: string, salario: number,
        data_contratação: Date, breve: string, senha: string): boolean {

        if (this.funcionarios.has(cpf))
            return false
        else {
            let piloto = new Piloto(cpf, rg, nome,
                endereço, telefone, salario,
                data_contratação, breve, senha)
            this.funcionarios.set(cpf, piloto)

            return true
        }
    }

    /**
     * Obtem um funcionário da persistencia do controle se existir
     * @param cpf
     * @returns Funcionario | undefined
     */
    buscarFuncionario(cpf: string): Funcionario | undefined {
        return this.funcionarios.get(cpf)
    }

    /**
     * Obtem os funcionários que não tem voos agendados para aquele dia
     * @param data data do voo
     * @returns Array<Funcionario> | undefined
     */
    listarPilotosDisponiveis(data: Date): Array<Funcionario> {
        let funcionarios = Array.from(this.funcionarios.values())
        let pilotosDisponiveis = funcionarios.filter(funcionario => {
            if (typeof Piloto == typeof (funcionario))
                if ((funcionario as Piloto).isDisponivel(data))
                    return funcionario;
        })

        return pilotosDisponiveis;
    }

    /**
     * Persiste um cliente na controle
     */
    adicionarCliente(cpf: string, rg: string, nome: string,
        endereço: string, telefone: string,
        indicacao: boolean) {

        if (this.clientes.has(cpf))
            return false
        else {
            let cliente = new Cliente(cpf, rg, nome,
                endereço, telefone, indicacao)
            this.clientes.set(cpf, cliente)

            return true
        }
    }

    /**
     * Obtem um cliente da persistencia do controle se existir
     * @param cpf
     * @returns Cliente | undefined
     */
    buscarCliente(cpf: string): Cliente | undefined {
        return this.clientes.get(cpf)
    }

    /**
     * Persiste uma venda no controle
     * @param dataHora hora do voo
     * @param idOrigem id do aeroporto de origem
     * @param idDestino id do aeroporto de destino
     * @param valor valor do voo
     * @param duracao duração do voo
     * @param idAeronave id da aeronave de transporte
     * @param idProduto id do produto vendido
     * @param cpfsClientes lista contendo cpf dos clientes envolvidos
     * @param cpfPiloto piloto que irão transportar
     */
    adicionarVenda(dataHora: Date, idOrigem: number, idDestino: number,
        valor: number, duracao: number, idAeronave: number,
        idProduto: number, cpfsClientes: Array<string>, cpfPiloto: string): boolean {

        let produto = this.buscarProduto(idProduto)
        let veiculo = this.buscarVeiculo(idAeronave)
        let origem = this.buscarAeroporto(idOrigem)
        let destino = this.buscarAeroporto(idDestino)
        let piloto = this.buscarFuncionario(cpfPiloto.toString()) as Piloto

        let venda = new Venda(this.protocolo, dataHora, valor,
                              duracao, false, Status.AGUARDANDO, produto!,
                              veiculo!, origem!, destino!,
                              piloto!);

        (this.login as Vendedor).adicionar(venda)
        this.vendas.set(this.protocolo, venda)

        this.protocolo++
        cpfsClientes.forEach(cpf => {
            let cliente = this.buscarCliente(cpf)
            if (cliente)
                cliente.adicionar(venda)
        });

        piloto.adicionar(venda)
        veiculo!.adicionar(venda)
        produto!.adicionar(venda)

        return true
    }

    /**
     * Obtem uma venda da persistencia do controle se existir
     * @param protocolo
     * @returns Venda | undefined
     */
    buscarVenda(protocolo: number): Venda | undefined {
        return this.vendas.get(protocolo);
    }

    /**
     * Persiste um veículo no controle
     * @param nome e.g. boeing 747
     */
    adicionarVeiculo(nome: string): boolean {
        let veiculo = new Veiculo(this.idVeiculo, nome)
        this.veiculos.set(this.idVeiculo, veiculo);
        this.idVeiculo++;
        return true
    }

    /**
     * Obtem um veículo da persistencia do controle se existir
     * @param identificador
     * @returns Veiculo | undefined
     */
    buscarVeiculo(id: number): Veiculo | undefined {
        return this.veiculos.get(id)
    }

    /**
     * Obtem os veículos que não tem voos agendados para aquele dia
     * @param data data do voo
     * @returns Array<Veiculo> | undefined
     */
    listarVeiculosDisponiveis(data: Date): Array<Veiculo> {
        let veiculos = Array.from(this.veiculos.values());
        let veiculosDisponiveis = veiculos.filter(veiculo => {
            if (veiculo.isDisponivel(data))
                return veiculo;
        })

        return veiculosDisponiveis;
    }

    /**
     * Persiste um produto na controle
     * @param nome e.g. Salto
     */
    adicionarProduto(nome: string): boolean {
        let produto = new Produto(this.idProduto, nome)
        this.produtos.set(this.idProduto, produto)
        this.idProduto += 1

        return true
    }

    /**
     * Obtem um produto da controle caso ele exista
     * @param id codigo gerado pelo sistema para produto cadastrado
     * @returns Produto | undefined
     */
    buscarProduto(id: number): Produto | undefined {
        return this.produtos.get(id)
    }

    /**
     * Persiste um aeroporto na controle
     * @param nome e.g. Galeão
     * @param cidade e.g. Rio de Janeiro
     * @param estado e.g. RJ
     */
    adicionarAeroporto(nome: string, cidade: string, estado: string): boolean {
        let aeroporto = new Aeroporto(this.idAeroporto, nome, estado, cidade);
        this.aeroportos.set(this.idAeroporto, aeroporto)
        this.idAeroporto += 1

        return true
    }

    /**
     * Obtem um aeroporto da controle caso ele exista
     * @param id identificador gerado pelo sistema para aeroporto
     * @returns Aeroporto | undefined
     */
    buscarAeroporto(id: number): Aeroporto | undefined {
        return this.aeroportos.get(id)
    }

    /**
     * Obtem uma lista de aeroportos dados os filtros de parametros
     * @param nome substring do nome para filtro
     * @param cidade e.g. Rio de Janeiro
     * @param estado e.g. RJ
     * @returns 
     */
    listarAeroportos(nome: string, estado: string, cidade: string) {
        let aeroportos = Array.from(this.aeroportos.values());
        aeroportos = aeroportos.filter(aeroporto => {
            if (aeroporto.nome.includes(nome) &&
                aeroporto.estado.includes(estado) &&
                aeroporto.cidade.includes(cidade))
                return aeroporto;
        })

        return aeroportos;
    }

}

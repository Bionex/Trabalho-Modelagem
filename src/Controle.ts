import Aeroporto from "./modelo/Aeroporto";
import Cliente from "./modelo/Cliente";
import Funcionario from "./modelo/Funcionario"
import Produto from "./modelo/Produto";
import Veiculo from "./modelo/Veiculo";
import Venda from "./modelo/Venda";
import Vendedor from "./modelo/Vendedor"
import Piloto from "./modelo/Piloto"
import { Status } from "./modelo/Status";
import Gerente from "./modelo/Gerente";
import { Permissao } from "./modelo/Permissao";
import util from "util"
import Respostas from "./Respostas";


//Controle.js
export default class Controle {
    private funcionarios: Map<string, Funcionario>;
    private vendas: Map<number, Venda>;
    private clientes: Map<string, Cliente>;
    private produtos: Map<number, Produto>;
    private aeroportos: Map<number, Aeroporto>;
    private veiculos: Map<number, Veiculo>;
    private user: Funcionario;
    private idAeroporto: number;
    private idProduto: number;
    private protocolo: number;
    private idVeiculo: number;


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

        // adicionando superuser
        this.funcionarios.set(process.env.ROOT_USER, 
                    new Gerente((process.env.ROOT_USER), '', 
                                (process.env.ROOT_USER), '', '', 0, new Date(), 
                                (process.env.ROOT_PASSWORD)))
    }



    /**
     * Persiste o usuario usando o sistema no momento para operações futuras,
     * se login bem sucedido
     * @param cpf 
     * @param senha 
     * @returns boolean
     */
    public login(cpf: string, senha: string): boolean{
        if (this.funcionarios.has(cpf) &&
            this.funcionarios.get(cpf).compararSenha(senha)){
            this.user = this.funcionarios.get(cpf)
            return true
        }
        else
            return false
    }    

    /**
     * Persiste vendedor na controle
     */
    public adicionarVendedor(cpf: string, rg: string, nome: string,
        endereço: string, telefone: string, salario: number,
       dataContratacao: Date, senha: string): string {
            
        if (this.funcionarios.has(cpf))
            return util.format(Respostas.JA_CADASTRADO, "Funcionário")
        else if (!this.user || !(this.user.hasPermission(Permissao.ADICIONA_VENDEDOR)))
            return Respostas.NAO_E_GERENTE
        else {
            let vendedor = new Vendedor(cpf, rg, nome,
                endereço, telefone, salario,
               dataContratacao, senha)
            this.funcionarios.set(cpf, vendedor)

            return Respostas.OK
        }
    }

    /**
     * Persiste gerente na controle
     */
    public adicionarGerente(cpf: string, rg: string, nome: string,
        endereço: string, telefone: string, salario: number,
        dataContratacao: Date, senha: string): string {

        if (this.funcionarios.has(cpf))
            return util.format(Respostas.JA_CADASTRADO, "Funcionário")
        else if (!this.user || !(this.user.hasPermission(Permissao.ADICIONA_GERENTE)))
            return Respostas.NAO_E_GERENTE
        else {
            let gerente = new Gerente(cpf, rg, nome,
                endereço, telefone, salario,
                dataContratacao, senha)
            this.funcionarios.set(cpf, gerente)

            return Respostas.OK
        }
    }

    /**
     * Persiste piloto na controle
     */
    public adicionarPiloto(cpf: string, rg: string, nome: string,
        endereço: string, telefone: string, salario: number,
        dataContratacao: Date, breve: string, senha: string): string {

        if (this.funcionarios.has(cpf))
            return util.format(Respostas.JA_CADASTRADO, "Funcionário")
        else if (!this.user || !(this.user.hasPermission(Permissao.ADICIONA_PILOTO)))
            return "Usuário não é gerente"
        else {
            let piloto = new Piloto(cpf, rg, nome,
                endereço, telefone, salario,
               dataContratacao, breve, senha)
            this.funcionarios.set(cpf, piloto)

            return Respostas.OK
        }
    }

    /**
     * Obtem um funcionário da persistencia do controle se existir
     * @param cpf
     * @returns Funcionario | undefined
     */
    public buscarFuncionario(cpf: string): Funcionario | undefined {
        return this.funcionarios.get(cpf)
    }

    /**
     * Obtem os funcionários que não tem voos agendados para aquele dia
     * @param data data do voo
     * @returns Array<Piloto>
     */
    public listarPilotosDisponiveis(data: Date): Array<Piloto> {
        let funcionarios = Array.from(this.funcionarios.values())
        let pilotosDisponiveis = funcionarios.filter(funcionario => {
            if (funcionario instanceof Piloto)
                if ((funcionario as Piloto).isDisponivel(data))
                    return funcionario;
        })

        return (<Piloto[]> pilotosDisponiveis);
    }

    /**
     * Persiste um cliente na controle
     */
    public adicionarCliente(cpf: string, rg: string, nome: string,
        endereço: string, telefone: string,
        indicacao: boolean): string {

        if (this.clientes.has(cpf))
            return util.format(Respostas.JA_CADASTRADO, "Cliente")
        else {
            let cliente = new Cliente(cpf, rg, nome,
                endereço, telefone, indicacao)
            this.clientes.set(cpf, cliente)

            return Respostas.OK
        }
    }

    /**
     * Obtem um cliente da persistencia do controle se existir
     * @param cpf
     * @returns Cliente | undefined
     */
    public buscarCliente(cpf: string): Cliente | undefined {
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
    public adicionarVenda(dataHora: Date, idOrigem: number, idDestino: number,
        valor: number, duracao: number, idAeronave: number,
        idProduto: number, cpfsClientes: Array<string>, cpfPiloto: string): string {

        let produto = this.buscarProduto(idProduto)
        if (!produto)
            return util.format(Respostas.NAO_EXISTE, "Produto")
        let veiculo = this.buscarVeiculo(idAeronave)
        if (!veiculo)
            return util.format(Respostas.NAO_EXISTE, "Veículo")
        else if (!veiculo.isDisponivel(dataHora))
            return util.format(Respostas.NAO_DISPONIVEL, "Veículo")
        let origem = this.buscarAeroporto(idOrigem)
        if (!origem)
            return util.format(Respostas.NAO_EXISTE, "Aeroporto origem")
        let destino = this.buscarAeroporto(idDestino)
        if (!destino)
            return util.format(Respostas.NAO_EXISTE, "Aeroporto destino")
        let piloto = this.buscarFuncionario(cpfPiloto) as Piloto
        if (!piloto)
            return util.format(Respostas.NAO_EXISTE, "Piloto")
        else if (!piloto.isDisponivel(dataHora))
            return util.format(Respostas.NAO_DISPONIVEL, "Piloto")
        for(let cpf of cpfsClientes)
            if (this.buscarCliente(cpf) == undefined)
            return util.format(Respostas.NAO_EXISTE, `Cliente ${cpf}`)  

        let venda = new Venda(this.protocolo, dataHora, valor,
                              duracao, false, Status.AGUARDANDO, produto,
                              veiculo, origem, destino,
                              piloto);

        (this.user as Vendedor).adicionar(venda)
        this.vendas.set(this.protocolo, venda)

        this.protocolo++
        cpfsClientes.forEach(cpf => {
            let cliente = this.buscarCliente(cpf)
            if (cliente)
                cliente.adicionar(venda)
        });

        piloto.adicionar(venda)
        veiculo.adicionar(venda)
        produto.adicionar(venda)

        return Respostas.OK
    }

    /**
     * Obtem uma venda da persistencia do controle se existir
     * @param protocolo
     * @returns Venda | undefined
     */
    public buscarVenda(protocolo: number): Venda | undefined {
        return this.vendas.get(protocolo);
    }

    /**
     * Persiste um veículo no controle
     * @param nome e.g. boeing 747
     */
    public adicionarVeiculo(nome: string): string {
        let veiculo = new Veiculo(this.idVeiculo, nome)
        this.veiculos.set(this.idVeiculo, veiculo);
        this.idVeiculo++;
        return Respostas.OK
    }

    /**
     * Obtem um veículo da persistencia do controle se existir
     * @param identificador
     * @returns Veiculo | undefined
     */
    public buscarVeiculo(id: number): Veiculo | undefined {
        return this.veiculos.get(id)
    }

    /**
     * Obtem os veículos que não tem voos agendados para aquele dia
     * @param data data do voo
     * @returns Array<Veiculo> | undefined
     */
    public listarVeiculosDisponiveis(data: Date): Array<Veiculo> {
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
    public adicionarProduto(nome: string): string {
        if (!this.user || !(this.user.hasPermission(Permissao.ADICIONA_PRODUTO)))
            return Respostas.NAO_E_GERENTE
        let produto = new Produto(this.idProduto, nome)
        this.produtos.set(this.idProduto, produto)
        this.idProduto += 1
        return Respostas.OK
    }

    /**
     * Obtem um produto da controle caso ele exista
     * @param id codigo gerado pelo sistema para produto cadastrado
     * @returns Produto | undefined
     */
    public buscarProduto(id: number): Produto | undefined {
        return this.produtos.get(id)
    }

    /**
     * Retorna todos os produtos cadastrados
     * @returns Array<Produto>
     */
    public listarProdutos(): Array<Produto> {
        return Array.from(this.produtos.values())
    }

    /**
     * Persiste um aeroporto na controle
     * @param nome e.g. Galeão
     * @param cidade e.g. Rio de Janeiro
     * @param estado e.g. RJ
     */
    public adicionarAeroporto(nome: string, cidade: string, estado: string): string {
        if (!this.user || !(this.user.hasPermission(Permissao.ADICIONA_AEROPORTO))) 
            return Respostas.NAO_E_GERENTE
        let aeroporto = new Aeroporto(this.idAeroporto, nome, cidade, estado);
        this.aeroportos.set(this.idAeroporto, aeroporto)
        this.idAeroporto += 1
        return Respostas.OK
    }

    /**
     * Obtem um aeroporto da controle caso ele exista
     * @param id identificador gerado pelo sistema para aeroporto
     * @returns Aeroporto | undefined
     */
    public buscarAeroporto(id: number): Aeroporto | undefined {
        return this.aeroportos.get(id)
    }

    /**
     * Obtem uma lista de aeroportos dados os filtros de parametros
     * @param nome substring do nome para filtro
     * @param cidade e.g. Rio de Janeiro
     * @param estado e.g. RJ
     * @returns lista aeroportos
     */
    public listarAeroportos(nome: string, cidade: string, estado: string): Array<Aeroporto> {
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
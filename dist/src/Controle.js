"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Aeroporto_1 = __importDefault(require("./modelo/Aeroporto"));
const Cliente_1 = __importDefault(require("./modelo/Cliente"));
const Produto_1 = __importDefault(require("./modelo/Produto"));
const Veiculo_1 = __importDefault(require("./modelo/Veiculo"));
const Venda_1 = __importDefault(require("./modelo/Venda"));
const Vendedor_1 = __importDefault(require("./modelo/Vendedor"));
const Piloto_1 = __importDefault(require("./modelo/Piloto"));
const Status_1 = require("./modelo/Status");
//Controle.js
class Controle {
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
        this.adicionarVendedor("cpf-vendedor1", "rg-vendedor1", "nome-vendedor1", "end-vendedor1", "tel-vendedor1", 2000, new Date(), "senha-vendedor1");
        this.login = this.buscarFuncionario("cpf-vendedor1");
    }
    adicionarVendedor(cpf, rg, nome, endereço, telefone, salario, data_contratação, senha) {
        var vendedor = new Vendedor_1.default(cpf, rg, nome, endereço, telefone, salario, data_contratação, senha);
        this.funcionarios.set(cpf, vendedor);
    }
    adicionarPiloto(cpf, rg, nome, endereço, telefone, salario, data_contratação, breve, senha) {
        var piloto = new Piloto_1.default(cpf, rg, nome, endereço, telefone, salario, data_contratação, breve, senha);
        this.funcionarios.set(cpf, piloto);
    }
    buscarFuncionario(cpf) {
        return this.funcionarios.get(cpf);
    }
    listarPilotosDisponiveis(data) {
        var funcionarios = Array.from(this.funcionarios.values());
        var pilotosDisponiveis = funcionarios.filter(funcionario => {
            if (typeof Piloto_1.default == typeof (funcionario)) {
                var amanha = new Date(data.getDate() + 1);
                if (funcionario.isDisponivel(data, amanha)) {
                    return funcionario;
                }
            }
        });
        return pilotosDisponiveis;
    }
    adicionarCliente(cpf, rg, nome, endereço, telefone, indicacao) {
        var cliente = new Cliente_1.default(cpf, rg, nome, endereço, telefone, indicacao);
        this.clientes.set(cpf, cliente);
    }
    buscarCliente(cpf) {
        return this.clientes.get(cpf);
    }
    adicionarVenda(dataHora, idOrigem, idDestino, valor, duracao, idAeronave, idProduto, cpfsClientes, cpfPiloto) {
        var produto = this.buscarProduto(idProduto.toString());
        var veiculo = this.buscarVeiculo(idAeronave.toString());
        var origem = this.buscarAeroporto(idOrigem.toString());
        var destino = this.buscarAeroporto(idDestino.toString());
        var piloto = this.buscarFuncionario(cpfPiloto.toString());
        var venda = new Venda_1.default(this.protocolo, dataHora, valor, duracao, false, Status_1.Status.AGUARDANDO, produto, veiculo, origem, destino, piloto);
        this.vendas.set(this.protocolo.toString(), venda);
        this.login.adicionar(venda);
        cpfsClientes.forEach(cpf => {
            var cliente = this.buscarCliente(cpf);
            cliente.adicionar(venda);
        });
        piloto.adicionar(venda);
    }
    buscarVenda(protocolo) {
        return this.vendas.get(protocolo);
    }
    adicionarVeiculo(nome) {
        var veiculo = new Veiculo_1.default(this.idVeiculo.toString(), nome);
        this.veiculos.set(this.idVeiculo.toString(), veiculo);
    }
    buscarVeiculo(identificador) {
        return this.veiculos.get(identificador);
    }
    listarVeiculosDisponiveis(data) {
        var veiculos = Array.from(this.veiculos.values());
        var veiculosDisponiveis = veiculos.filter(veiculo => {
            var amanha = new Date(data.getDate() + 1);
            if (veiculo.isDisponivel(data, amanha)) {
                return veiculo;
            }
        });
        return veiculosDisponiveis;
    }
    adicionarProduto(nome) {
        var produto = new Produto_1.default(this.idProduto, nome);
        this.produtos.set(this.idProduto.toString(), produto);
        this.idProduto += 1;
    }
    buscarProduto(id) {
        return this.produtos.get(id);
    }
    adicionarAeroporto(nome, cidade, estado) {
        var aeroporto = new Aeroporto_1.default(this.idAeroporto, nome, estado, cidade);
        this.aeroportos.set(this.idAeroporto.toString(), aeroporto);
        this.idAeroporto += 1;
    }
    buscarAeroporto(id) {
        return this.aeroportos.get(id);
    }
    listarAeroportos(nome, estado, cidade) {
        var aeroportos = Array.from(this.aeroportos.values());
        aeroportos = aeroportos.filter(aeroporto => {
            if (aeroporto.nome.includes(nome) && aeroporto.estado.includes(estado) && aeroporto.cidade.includes(cidade))
                return aeroporto;
        });
        return aeroportos;
    }
}
exports.default = Controle;

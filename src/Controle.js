const Piloto = require("./modelo/Piloto");
const Produto = require("./modelo/Produto");
const Venda = require("./modelo/Venda");
const Vendedor = require("./modelo/Vendedor");
const Cliente = require("./modelo/Cliente");
const Aeroporto = require("./modelo/Aeroporto");
const Veiculo = require("./modelo/Veiculo");

//Controle.js
module.exports = class Controle {

    constructor(){
        this.funcionarios = new Map();
        this.vendas = new Map();
        this.clientes = new Map();
        this.produtos = new Map();
        this.aeroportos = new Map();
        this.veiculos = new Map();
        this.login = false;
        this.idAeroporto = 0;
        this.idProduto = 0;
        this.protocolo = 0;
    }  


    
    logar(cpf, senha){
        if( funcionario = this.buscarFuncionario(cpf) != null && funcionario.senha == senha)
            this.login = true
        
        else if(cliente = this.buscarCliente(cpf) != null && cliente.senha == senha)
            this.login = true
        
        this.login = false
    }

    adicionarVendedor(cpf, rg , nome, endereço, telefone, salario, data_contratação, senha){
        var vendedor = new Vendedor(cpf, rg , nome , endereço, telefone, salario , data_contratação, senha)
        this.funcionarios.set(cpf, vendedor)
        
    }

    adicionarPiloto(cpf, rg , nome, endereço, telefone, salario, data_contratação, breve,senha){
        var piloto = new Piloto(cpf, rg , nome, endereço, telefone, salario, data_contratação, breve, senha)
        this.funcionarios.set(cpf, piloto)
    }

    AdicionarGerente(cpf, rg , nome, endereço, telefone, slario, data_contratação, senha){

    }

    alterarFuncionario(funcionario){

    }

    removerFuncionario(funcionario){

        
    }

    buscarFuncionario(cpf){
        return this.funcionarios.get(cpf)
    }

    listarPilotos(data){
        return listOf(Piloto)
    }

    adicionarCliente(cpf, rg , nome, endereço, telefone, indicacao){
        var cliente = new Cliente(cpf, rg , nome , endereço, telefone, indicacao)
        this.clientes.set(cpf, cliente)
    }

    alterarCliente(cliente){

    }

    removerCliente(cliente){
    
    }

    buscarCliente(cpf){
        return this.clientes.get(cpf)
    }

    criarVenda(dataHora, origem, destino, valor, duracao, status, produto, veiculo){
        var venda = new Venda(this.protocolo ,dataHora, valor, duracao, false, status, produto, veiculo, origem, destino)
        this.protocolo += 1;
        return venda;
    }

    adicionarVenda(venda, vendedor, clientes, piloto){
        this.vendas.set(venda.protocolo,venda)
        vendedor.adicionarVenda(venda)

        clientes.forEach(cliente => {
            cliente.adicionarVenda(venda)
        });

        piloto.adicionarVenda(venda)
    }

    alterarVenda(venda){

    }

    removerVenda(venda){

    }

    buscarVenda(protocolo){

    }

    adicionarVeiculo(identificador, nome){
        var veiculo = new Veiculo(identificador, nome)
        this.veiculos.set(identificador, veiculo)
        
    }

    alterarVeiculo(veiculo){

    }

    removerVeiculo(veiculo){

    }

    buscarVeiculo(identificador){
        return this.veiculos.get(identificador)
    }

    listarVeiculos(data){

    }

    adicionarProduto(nome){
        //TODO fix id
        var produto = new Produto(this.idProduto, nome)
        this.produtos.set(this.idProduto, produto)
        this.idProduto += 1
    }

    alterarProduto(produto){

    }

    removerProduto(produto){

    }

    buscarProduto(id){
        return this.produtos.get(id)
    }

    listarProdutos(filtro){

    }

    adicionarAeroporto(nome,cidade,estado){
        //TODO fix id
        var aeroporto = new Aeroporto(this.idAeroporto , nome, estado, cidade);
        this.aeroportos.set(this.idAeroporto, aeroporto)
        this.idAeroporto += 1
    }

    alterarAeroporto(aeroporto){

    }

    removerAeroporto(aeroporto){

    }

    buscarAeroporto(id){
        return this.aeroportos.get(id)
    }

    listarAeroportos(filtro, estado, cidade){

    }

    relatarHorasVoadas(piloto, ini, fim){

    }

    relatarTopVendedores(piloto, fim, limite){

    }

    relatarVendedoresVendas(ini, fim){

    }

    reletarVeiculosDisponiveis(data){

    }

    relatarQtdeClientesIndicação(){

    }

    relatarQtdeVoosAtrasados(periodo){

    }

    relatarTopProdutos(){

    }

    deslogar(){
        this.login = false
    }
}
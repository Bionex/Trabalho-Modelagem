const Controle = require("./src/Controle");
const Funcionario = require("./src/modelo/Funcionario");
const Pessoa = require("./src/modelo/Pessoa");
const Status = require("./src/modelo/Status");

controle = new Controle()


controle.adicionarPiloto(cpf = "cpf-piloto1", rg = "111.111.111.22", nome = "Nicolas machado", endereço = "Rua Linda - Barra da Tijuca - RJ", telefone = "21 9 7157-9976", salario = 10000.00, data_contratação = "1995/01/01", senha = "123", breve = "breve1");
controle.adicionarCliente(cpf = "cpf-cliente1", rg = "11", nome = " aa", endereco = "rua 1",telefone = "70028922", indicacao = null);
controle.adicionarVendedor(cpf = "cpf-vendedor1", rg = "qlqcoisa" , nome = "to nem ai", endereço = "casa do c******", telefone = "playstation 2", salario = "pobre", data_contratação = "desde o primeiro dia", senha = "senha")

controle.adicionarAeroporto("aeroporto de congunhas", "nem sei que cidade é", "estado de odio");
controle.adicionarAeroporto("aeroporto da cidade vizinha", "cidade vizinha a não sei que cidade é", "estado de odio");

controle.adicionarVeiculo("462", "avião brabissimo")
controle.adicionarProduto("paraquedismo brabo d+")

var vendedor = controle.buscarFuncionario("cpf-vendedor1");

controle.adicionarVenda(controle.criarVenda("hoje", controle.buscarAeroporto(0), controle.buscarAeroporto(1), 1000, 5, Status.AGUARDANDO, controle.buscarProduto(0), controle.buscarVeiculo("462")), controle.buscarFuncionario("cpf-vendedor1"), new Array(controle.buscarCliente("cpf-cliente1")), controle.buscarFuncionario("cpf-piloto1"))


var cliente = controle.buscarCliente("cpf-cliente1");


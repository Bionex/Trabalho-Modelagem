"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Controle_1 = __importDefault(require("./src/Controle"));
var controle = new Controle_1.default();
controle.adicionarPiloto("cpf-piloto1", "rg-piloto1", "nome-piloto1", "end-piloto1", "tel-piloto1", 1000, new Date(), "breve-piloto1", "senha-piloto1");
controle.adicionarCliente("cpf-cliente1", "rg-cliente1", "nome-cliente1", "end-cliente1", "tel-cliente1", false);
controle.adicionarVendedor("cpf-vendedor1", "rg-vendedor1", "nome-vendedor1", "end-vendedor1", "tel-vendedor1", 2000, new Date(), "senha-vendedor1");
controle.adicionarAeroporto("aeroporto 1", "cidade 1", "estado 1");
controle.adicionarAeroporto("aeroporto 2", "cidade 2", "estado 1");
controle.adicionarVeiculo("avião 1");
controle.adicionarProduto("produto 1");
var clientes = new Array;
clientes.push("cpf-cliente1");
controle.adicionarVenda(new Date(), "0", "1", 500, 3, 0, 0, clientes, "cpf-piloto1");
var cliente = controle.buscarCliente("cpf-cliente1");

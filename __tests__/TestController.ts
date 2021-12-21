import 'dotenv/config'
import Controle from "../src/Controle"
import Cliente from '../src/modelo/Cliente'
import Funcionario from '../src/modelo/Funcionario'
import Gerente from '../src/modelo/Gerente'
import Piloto from '../src/modelo/Piloto'



describe("Vendedor", () => {

	let controle

	beforeEach(() => {
		controle = new Controle()
	})

	it("Adicionar vendedor", () => {
        controle.login(process.env.ROOT_USER, process.env.ROOT_PASSWORD)
        expect(controle.adicionarVendedor('111.222.333-44', '11.222.333-4', 'test',
                                   'Rua X', '(21) 33333-2222', 20000, new Date(),
                                   '123')).toBe("OK")
    })

    it("Adicionar vendedor duplicado", () => {
        controle.login(process.env.ROOT_USER, process.env.ROOT_PASSWORD)
        expect(controle.adicionarVendedor('111.222.333-44', '11.222.333-4', 'test',
                                   'Rua X', '(21) 33333-2222', 20000, new Date(),
                                   '123')).toBe("OK")
        expect(controle.adicionarVendedor('111.222.333-44', '11.222.333-4', 'test',
                                   'Rua X', '(21) 33333-2222', 20000, new Date(),
                                   '123')).toMatch(/.*já cadastrado/)
    })

    it("Adicionar vendedor sem ser admin", () => {
        controle.login(process.env.ROOT_USER, process.env.ROOT_PASSWORD)
        expect(controle.adicionarVendedor('111.222.333-44', '11.222.333-4', 'test',
                                   'Rua X', '(21) 33333-2222', 20000, new Date(),
                                   '123')).toBe("OK")
        controle.login('111.222.333-44', '123')
        expect(controle.adicionarVendedor('211.222.333-44', '11.222.333-4', 'test',
                                   'Rua X', '(21) 33333-2222', 20000, new Date(),
                                   '123')).toMatch(/Usuário.*gerente/)
    })

    it("Buscar vendedor", () => {
        controle.login(process.env.ROOT_USER, process.env.ROOT_PASSWORD)
        controle.adicionarVendedor('111.222.333-44', '11.222.333-4', 'test',
                                   'Rua X', '(21) 33333-2222', 20000, new Date(),
                                   '123')
        expect(controle.buscarFuncionario('111.222.333-44')).toBeInstanceOf(Funcionario)
    })

    it("Buscar vendedor inexistente", () => {
        expect(controle.buscarFuncionario('error')).toBeUndefined()
    })
})

describe("Piloto", () => {

	let controle

	beforeEach(() => {
		controle = new Controle()
	})

	it("Adicionar piloto", () => {
        controle.login(process.env.ROOT_USER, process.env.ROOT_PASSWORD)
        expect(controle.adicionarPiloto('111.222.333-44', '11.222.333-4', 'test',
                                   'Rua X', '(21) 33333-2222', 20000, new Date(),
                                   '11111', '123')).toBe("OK")
    })

    it("Adicionar piloto duplicado", () => {
        controle.login(process.env.ROOT_USER, process.env.ROOT_PASSWORD)
        expect(controle.adicionarPiloto('111.222.333-44', '11.222.333-4', 'test',
                                   'Rua X', '(21) 33333-2222', 20000, new Date(),
                                   '11111', '123')).toBe("OK")
        expect(controle.adicionarPiloto('111.222.333-44', '11.222.333-4', 'test',
                                   'Rua X', '(21) 33333-2222', 20000, new Date(),
                                   '11111', '123')).toMatch(/.*já cadastrado/)
    })

    it("Adicionar piloto sem ser admin", () => {
        controle.login(process.env.ROOT_USER, process.env.ROOT_PASSWORD)
        expect(controle.adicionarPiloto('111.222.333-44', '11.222.333-4', 'test',
                                   'Rua X', '(21) 33333-2222', 20000, new Date(),
                                   '11111', '123')).toBe("OK")
        controle.login('111.222.333-44', '123')
        expect(controle.adicionarPiloto('211.222.333-44', '11.222.333-4', 'test',
                                   'Rua X', '(21) 33333-2222', 20000, new Date(),
                                   '11111', '123')).toMatch(/Usuário.*gerente/)
    })

    it("Buscar piloto", () => {
        controle.login(process.env.ROOT_USER, process.env.ROOT_PASSWORD)
        controle.adicionarPiloto('111.222.333-44', '11.222.333-4', 'test',
                                   'Rua X', '(21) 33333-2222', 20000, new Date(),
                                   '11111', '123')
        expect(controle.buscarFuncionario('111.222.333-44')).toBeInstanceOf(Funcionario)
    })

    it("Buscar piloto inexistente", () => {
        expect(controle.buscarFuncionario('error')).toBeUndefined()
    })

    it("Listar pilotos disponiveis", () => {
        controle.login(process.env.ROOT_USER, process.env.ROOT_PASSWORD)
        controle.adicionarPiloto('111.222.333-44', '11.222.333-4', 'test',
                                   'Rua X', '(21) 33333-2222', 20000, new Date(),
                                   '11111', '123')
        expect(controle.listarPilotosDisponiveis(new Date())).toHaveLength(1)
    })

    it("Não listar piloto indisponivel", () => {
        controle.login(process.env.ROOT_USER, process.env.ROOT_PASSWORD)
        controle.adicionarPiloto('111.222.333-44', '11.222.333-4', 'test',
                                   'Rua X', '(21) 33333-2222', 20000, new Date(),
                                   '11111', '123');
        jest.spyOn((controle.buscarFuncionario('111.222.333-44') as Piloto), 'isDisponivel')
                .mockImplementation(() => false)
        expect(controle.listarPilotosDisponiveis(new Date())).toHaveLength(0)
    })
})

describe("Gerente", () => {

	let controle

	beforeEach(() => {
		controle = new Controle()
	})

	it("Adicionar gerente", () => {
        controle.login(process.env.ROOT_USER, process.env.ROOT_PASSWORD)
        expect(controle.adicionarGerente('111.222.333-44', '11.222.333-4', 'test',
                                   'Rua X', '(21) 33333-2222', 20000, new Date(),
                                   '123')).toBe("OK")
    })

    it("Adicionar gerente duplicado", () => {
        controle.login(process.env.ROOT_USER, process.env.ROOT_PASSWORD)
        expect(controle.adicionarGerente('111.222.333-44', '11.222.333-4', 'test',
                                   'Rua X', '(21) 33333-2222', 20000, new Date(),
                                   '123')).toBe("OK")
        expect(controle.adicionarGerente('111.222.333-44', '11.222.333-4', 'test',
                                   'Rua X', '(21) 33333-2222', 20000, new Date(),
                                   '123')).toMatch(/.*já cadastrado/)
    })

    it("Adicionar gerente sem ser admin", () => {
        controle.login(process.env.ROOT_USER, process.env.ROOT_PASSWORD)
        expect(controle.adicionarVendedor('111.222.333-44', '11.222.333-4', 'test',
                                   'Rua X', '(21) 33333-2222', 20000, new Date(),
                                   '123')).toBe("OK")
        controle.login('111.222.333-44', '123')
        expect(controle.adicionarGerente('211.222.333-44', '11.222.333-4', 'test',
                                   'Rua X', '(21) 33333-2222', 20000, new Date(),
                                   '123')).toMatch(/Usuário.*gerente/)
    })

    it("Adicionar gerente sendo admin", () => {
        controle.login(process.env.ROOT_USER, process.env.ROOT_PASSWORD)
        expect(controle.adicionarGerente('111.222.333-44', '11.222.333-4', 'test',
                                   'Rua X', '(21) 33333-2222', 20000, new Date(),
                                   '123')).toBe("OK")
        controle.login('111.222.333-44', '123')
        expect(controle.adicionarGerente('211.222.333-44', '11.222.333-4', 'test',
                                   'Rua X', '(21) 33333-2222', 20000, new Date(),
                                   '123')).toBe("OK")
    })

    it("Adicionar vendedor sendo admin", () => {
        controle.login(process.env.ROOT_USER, process.env.ROOT_PASSWORD)
        expect(controle.adicionarGerente('111.222.333-44', '11.222.333-4', 'test',
                                   'Rua X', '(21) 33333-2222', 20000, new Date(),
                                   '123')).toBe("OK")
        controle.login('111.222.333-44', '123')
        expect(controle.adicionarVendedor('211.222.333-44', '11.222.333-4', 'test',
                                   'Rua X', '(21) 33333-2222', 20000, new Date(),
                                   '123')).toBe("OK")
    })

    it("Adicionar piloto sendo admin", () => {
        controle.login(process.env.ROOT_USER, process.env.ROOT_PASSWORD)
        expect(controle.adicionarGerente('111.222.333-44', '11.222.333-4', 'test',
                                   'Rua X', '(21) 33333-2222', 20000, new Date(),
                                   '123')).toBe("OK")
        controle.login('111.222.333-44', '123')
        expect(controle.adicionarPiloto('211.222.333-44', '11.222.333-4', 'test',
                                   'Rua X', '(21) 33333-2222', 20000, new Date(),
                                   '1111', '123')).toBe("OK")
    })

    it("Buscar gerente", () => {
        controle.login(process.env.ROOT_USER, process.env.ROOT_PASSWORD)
        controle.adicionarGerente('111.222.333-44', '11.222.333-4', 'test',
                                   'Rua X', '(21) 33333-2222', 20000, new Date(),
                                   '123')
        expect(controle.buscarFuncionario('111.222.333-44')).toBeInstanceOf(Gerente)
    })

    it("Buscar gerente inexistente", () => {
        expect(controle.buscarFuncionario('error')).toBeUndefined()
    })
})

describe("Cliente", () => {

	let controle

	beforeEach(() => {
		controle = new Controle()
	})

	it("Adicionar cliente", () => {
        expect(controle.adicionarCliente('111.222.333-44', '11.222.333-4', 'test',
                                   'Rua X', '(21) 33333-2222', false)).toBe("OK")
    })

    it("Adicionar cliente duplicado", () => {
        controle.adicionarCliente('111.222.333-44', '11.222.333-4', 'test',
                                   'Rua X', '(21) 33333-2222', false)
        expect(controle.adicionarCliente('111.222.333-44', '11.222.333-4', 'test',
                                   'Rua X', '(21) 33333-2222', false))
                                   .toMatch(/.*já cadastrado/)
    })

    it("Buscar cliente", () => {
        controle.adicionarCliente('111.222.333-44', '11.222.333-4', 'test',
                                   'Rua X', '(21) 33333-2222', false)
        expect(controle.buscarCliente('111.222.333-44')).toBeInstanceOf(Cliente)
    })

    it("Buscar cliente inexistente", () => {
        expect(controle.buscarFuncionario('error')).toBeUndefined()
    })
})

describe("Produto", () => {

	let controle

	beforeEach(() => {
		controle = new Controle()
	})

    it("Adicionar produto", () => {
        controle.login(process.env.ROOT_USER, process.env.ROOT_PASSWORD)
        expect(controle.adicionarProduto('teste')).toBe('OK')
    })

    it("Adicionar produto sem admin", () => {
        expect(controle.adicionarProduto('teste')).toMatch(/não.*gerente/)
    })

    it("Listar produtos", () => {
        controle.login(process.env.ROOT_USER, process.env.ROOT_PASSWORD)
        controle.adicionarProduto('teste')
        expect(controle.listarProdutos()).toHaveLength(1)
    })

    it("Buscar produto", () => {
        controle.login(process.env.ROOT_USER, process.env.ROOT_PASSWORD)
        controle.adicionarProduto('teste')
        expect(controle.buscarProduto(controle.listarProdutos()[0].id)).not.toBeUndefined()
    })

    it("Buscar produto inexistente", () => {
        expect(controle.buscarProduto(42)).toBeUndefined()
    })
})

describe("Veiculo", () => {

	let controle

	beforeEach(() => {
		controle = new Controle()
	})

    it("Adicionando veiculo", () => {
        expect(controle.adicionarVeiculo("Test")).toBe("OK")
    })

    it("Listar veiculos disponiveis", () => {
        controle.adicionarVeiculo("Test")
        expect(controle.listarVeiculosDisponiveis(new Date())).toHaveLength(1)
    })

    it("Não listar veículo indisponível", () => {
        controle.adicionarVeiculo("TestA")
        controle.adicionarVeiculo("TestB")
        jest.spyOn(controle.listarVeiculosDisponiveis(new Date())[0], 'isDisponivel')
            .mockImplementation(() => false)
        expect(controle.listarVeiculosDisponiveis(new Date())).toHaveLength(1)
    })

    it("Buscar veiculo", () => {
        controle.adicionarVeiculo("Test")
        expect(controle.buscarVeiculo(
            controle.listarVeiculosDisponiveis(new Date())[0].id)).not.toBeUndefined()
    })

    it("Buscar veiculo inexistente", () => {
        expect(controle.buscarVeiculo("test")).toBeUndefined()
    })
})

describe("Aeroporto", () => {

	let controle

	beforeEach(() => {
		controle = new Controle()
	})

    it("Adicionar aeroporto", () => {
        controle.login(process.env.ROOT_USER, process.env.ROOT_PASSWORD)
        expect(controle.adicionarAeroporto("T", "C", "E")).toBe("OK")
    })

    it("Adicionar aeroporto sem ser admin", () => {
        expect(controle.adicionarAeroporto("T", "C", "E")).toMatch(/não.*gerente/)
    })

    it("Listar aeroportos disponiveis", () => {
        controle.login(process.env.ROOT_USER, process.env.ROOT_PASSWORD)
        controle.adicionarAeroporto("T", "C", "E")
        expect(controle.listarAeroportos('', '', '')).toHaveLength(1)
    })

    it("Buscar aeroporto", () => {
        controle.login(process.env.ROOT_USER, process.env.ROOT_PASSWORD)
        controle.adicionarAeroporto("T", "C", "E")
        expect(controle.buscarAeroporto(
            controle.listarAeroportos('', '', '')[0].id)).not.toBeUndefined()
    })

    it("Buscar aeroporto inexistente", () => {
        expect(controle.buscarAeroporto(42)).toBeUndefined()
    })
})

describe("Login", () => {

	let controle

	beforeEach(() => {
		controle = new Controle()
	})

    it("Logado como root", () => {
        expect(controle.login(process.env.ROOT_USER, process.env.ROOT)).toBeTruthy()
    })

    it("Login errado", () => {
        expect(controle.login('', '')).toBeFalsy()
    })
})

describe("Venda", () => {
    let controle = undefined
    let veiculoId
    let produtoId
    let origemId
    let destinoId
    let pilotoId
    let clienteId
    let data = new Date()

    beforeEach(() => {
        controle = new Controle()
        // Admin
        controle.login(process.env.ROOT_USER, process.env.ROOT_PASSWORD)
        controle.adicionarVendedor('111.222.333-44', '11.222.333-4', 'test',
                                   'Rua X', '(21) 33333-2222', 20000, new Date(),
                                   '123')
        controle.adicionarPiloto('222.333.444-55', '11.222.333-4', 'test',
                                 'Rua X', '(21) 33333-2222', 20000, new Date(),
                                 '11111', '123')
        pilotoId = '222.333.444-55'

        controle.adicionarProduto('Teste')
        produtoId = controle.listarProdutos()[0].id

        controle.adicionarAeroporto('TesteA', 'Teste', 'Teste')
        origemId = controle.listarAeroportos('TesteA', 'Teste', 'Teste')[0].id

        controle.adicionarAeroporto('TesteB', 'Teste', 'Teste')
        destinoId = controle.listarAeroportos('TesteB', 'Teste', 'Teste')[0].id

        // Vendor
        controle.login('111.222.333-44', '123')

        controle.adicionarCliente('211.222.333-44', '11.222.333-4', 'test',
                                 'Rua X', '(21) 33333-2222', 20000, new Date(), false)
        clienteId = ['211.222.333-44']

        controle.adicionarVeiculo('Teste')
        veiculoId = controle.listarVeiculosDisponiveis(data)[0].id
    })

    it("Adicionar venda", () => {
        expect(controle.adicionarVenda(data, origemId, destinoId, 1000.0, 8,
                            veiculoId, produtoId, clienteId, pilotoId)).toBe("OK")
        expect(controle.buscarCliente(clienteId[0]).vendas[0].dataHora).toBe(data)
    })

    it("Adicionar venda com multiplos clientes", () => {
        let localCpf = '322.333.444-55'
        controle.adicionarCliente(localCpf, '11.222.333-4', 'test',
                                 'Rua X', '(21) 33333-2222', 20000, new Date(), false)
        expect(controle.adicionarVenda(data, origemId, destinoId, 1000.0, 8,
                            veiculoId, produtoId, [clienteId[0], localCpf], pilotoId)).toBe("OK")
        expect(controle.buscarCliente(clienteId[0]).vendas[0].dataHora).toBe(data)
        expect(controle.buscarCliente(localCpf).vendas[0].dataHora).toBe(data)
    })

    it("Piloto não existente", () => {
        expect(controle.adicionarVenda(data, origemId, destinoId, 1000.0, 8,
                            veiculoId, produtoId, clienteId, '')).toMatch(/Piloto.*não existe/)
    })

    it("Piloto indisponivel", () => {
        expect(controle.adicionarVenda(data, origemId, destinoId, 1000.0, 8,
                            veiculoId, produtoId, clienteId, pilotoId)).toBe("OK")
        controle.adicionarVeiculo('Test2')
        let localVeiculoId = controle.listarVeiculosDisponiveis(data)[0].id
        expect(controle.adicionarVenda(data, origemId, destinoId, 1000.0, 8,
                            localVeiculoId, produtoId, clienteId, pilotoId))
                            .toMatch(/Piloto.*não disponível/)
    })

    it("Produto não existente", () => {
        expect(controle.adicionarVenda(data, origemId, destinoId, 1000.0, 8,
                            veiculoId, 42, clienteId, ''))
                            .toMatch(/Produto.*não existe/)
    })

    it("Veículo não existente", () => {
        expect(controle.adicionarVenda(data, origemId, destinoId, 1000.0, 8,
                            42, produtoId, clienteId, pilotoId))
                            .toMatch(/Veículo.*não existe/)
    })

    it("Veículo indisponivel", () => {
        expect(controle.adicionarVenda(data, origemId, destinoId, 1000.0, 8,
                            veiculoId, produtoId, clienteId, pilotoId)).toBe("OK")
        controle.adicionarPiloto('322.333.444-55', '11.222.333-4', 'test',
                                 'Rua X', '(21) 33333-2222', 20000, new Date(),
                                 '11111', '123')
        expect(controle.adicionarVenda(data, origemId, destinoId, 1000.0, 8,
                            veiculoId, produtoId, clienteId, pilotoId))
                            .toMatch(/Veículo.*não disponível/)
    })

    it("Veículo não existente", () => {
        expect(controle.adicionarVenda(data, origemId, destinoId, 1000.0, 8,
                            42, produtoId, clienteId, pilotoId))
                            .toMatch(/Veículo.*não existe/)
    })

    it("Cliente não existente", () => {
        expect(controle.adicionarVenda(data, origemId, destinoId, 1000.0, 8,
                            veiculoId, produtoId, ['erro'], pilotoId))
                            .toMatch(/Cliente.*não existe/)
    })

    it("Um dos multiples cliente não existente", () => {
        expect(controle.adicionarVenda(data, origemId, destinoId, 1000.0, 8,
                            veiculoId, produtoId, [clienteId[0], 'erro'], pilotoId))
                            .toMatch(/erro.*não existe/)
    })

    it("Origem não existente", () => {
        expect(controle.adicionarVenda(data, 42, destinoId, 1000.0, 8,
                            veiculoId, produtoId, ['erro'], pilotoId))
                            .toMatch(/origem.*não existe/)
    })

    it("Destino não existente", () => {
        expect(controle.adicionarVenda(data, origemId, 42, 1000.0, 8,
                            veiculoId, produtoId, ['erro'], pilotoId))
                            .toMatch(/destino.*não existe/)
    })

    it("Buscar venda", () => {
        controle.adicionarVenda(data, origemId, destinoId, 1000.0, 8,
                                veiculoId, produtoId, clienteId, pilotoId)
        expect(controle.buscarVenda(
                controle.buscarCliente(clienteId[0]).vendas[0].protocolo))
            .toBeDefined()
    })

    it("Buscar venda inexistente", () => {
        expect(controle.buscarVenda(42)).toBeUndefined()
    })
})

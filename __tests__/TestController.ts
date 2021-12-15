import 'dotenv/config'
import Controle from "../src/Controle"


describe("Adicionar venda", () => {
    let controle = undefined

    beforeEach(() => {
        controle = new Controle()
        // Admin
        controle.login(process.env.ROOT_USER, process.env.ROOT_PASSWORD)
        controle.adicionarVendedor('111.222.333.444-55', '11.222.333-4', 'test',
                                   'Rua X', '(21) 33333-2222', 20000, new Date(),
                                   '11111', '123')
        controle.adicionarPiloto('222.222.333.444-55', '11.222.333-4', 'test',
                                 'Rua X', '(21) 33333-2222', 20000, new Date(),
                                 '11111', '123')
        controle.adicionarProduto('Teste')
        controle.adicionarAeroporto('TesteA', 'Teste', 'Teste')
        controle.adicionarAeroporto('TesteB', 'Teste', 'Teste')
        // Vendor
        controle.login('111.222.333.444-55', '123')
        controle.adicionarCliente('111.222.333.444-55', '11.222.333-4', 'test',
                                 'Rua X', '(21) 33333-2222', 20000, new Date(), false)
        controle.adicionarVeiculo('Teste')
    })

    it("Caso correto", () => {
        expect(controle.adicionarVenda(new Date(), 
                                controle.listarAeroportos('TesteA', 'Teste', 'Teste')[0].id,
                                controle.listarAeroportos('TesteB', 'Teste', 'Teste')[0].id,
                                1000.0, 8,
                                controle.listarVeiculosDisponiveis(new Date())[0].id,
                                controle.listarProdutos()[0].id,
                                ['111.222.333.444-55'], '222.222.333.444-55')).toBe("OK")
    })
})

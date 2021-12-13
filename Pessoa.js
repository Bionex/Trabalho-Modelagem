class Pessoa {
  
  constructor(cpf, rg, nome, endereco, telefone) {
    if ( this . constructor === Pessoa ) {
      throw  new  Error ( "Não é possível instanciar a classe abstrata!" );
    }
    this.cpf = cpf;
    this.rg = rg;
    this.nome = nome;
    this.endereco = endereco;
    this.telefone = telefone;
  }

  alterarNome(nome)
  {
    throw new Error("Method 'alterarNome()' must be implemented.");
  }
  alterarEndereco(endereco)
  {
    throw new Error("Method 'alterarEndereco()' must be implemented.");
  }
  alterarTelefone(telefone)
  {
    throw new Error("Method 'alterarTelefone()' must be implemented.");
  }
  alterarCpf(cpf)
  {
    throw new Error("Method 'alterarCpf()' must be implemented.");
  }
}
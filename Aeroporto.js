//Aeroporto.js
module.exports = class Aeroporto {
  constructor(id, nome, estado, cidade) {
    this.id = id;
    this.nome = nome;
    this.estado = estado;
    this.cidade = cidade;
  }

  alterarNome(nome)
  {
    this.nome = nome;
  }
}
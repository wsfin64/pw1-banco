class Cliente {
    constructor(nome, cpf, conta) {
        nome = this.nome;
        cpf = this.cpf;
        conta = this.conta;
    }
    getNome() {
        return this.nome;
    }
    setNome(novoNome) {
        this.nome = novoNome;
    }
    getCPF() {
        return this.cpf;
    }
    setCPF(novoCPF) {
        this.cpf = novoCPF;
    }
    getConta() {
        return this.conta;
    }
    toString() {
        return `Nome: ${this.nome} - CPF: ${this.cpf}`;
    }
}

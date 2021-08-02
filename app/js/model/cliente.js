class Cliente {
    constructor(nome, cpf, conta) {
        this.nome = nome;
        this.cpf = cpf;
        this.conta = conta;
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

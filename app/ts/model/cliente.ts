class Cliente {

    private nome: string;
    private cpf: string;
    private conta: string;

    constructor(nome: string, cpf: string, conta:string ) {
        this.nome = nome;
        this.cpf = cpf;
        this.conta = conta;
    }

    getNome(): string{
        return this.nome;
    }

    setNome(novoNome: string): void {
        this.nome = novoNome;
    }

    getCPF(): string{
        return this.cpf;
    }

    setCPF(novoCPF: string): void {
        this.cpf = novoCPF;
    }

    getConta(): string {
        return this.conta;
    }

    toString(): string {
        return `Nome: ${this.nome} - CPF: ${this.cpf}`;
    }


}
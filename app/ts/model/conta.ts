class Conta {

    private numero: string;
    private saldo: number;

    constructor(numero: string, saldo: number=0) {
        this.numero = numero;
        this.saldo = saldo;
    }

    getNumero(): string{
        return this.numero;
    }

    setNumero(numero: string): void {
        this.numero = numero;
    }

    getSaldo(): number {
        return this.saldo;
    }

    debitar(valor:number): void {
        //apenas debita se houver saldo
        if (valor < this.saldo) {
            this.saldo -= valor;
        }
    }

    creditar(valor:number): void {
        this.saldo += valor;
    }

    toString(): string {
        return `Numero: ${this.numero} - Saldo: ${this.saldo}`
    }

}

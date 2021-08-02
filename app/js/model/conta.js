class Conta {
    constructor(numero, saldo = 0) {
        this.numero = numero;
        this.saldo = saldo;
    }
    getNumero() {
        return this.numero;
    }
    setNumero(numero) {
        this.numero = numero;
    }
    getSaldo() {
        return this.saldo;
    }
    debitar(valor) {
        //apenas debita se houver saldo
        if (valor < this.saldo) {
            this.saldo -= valor;
        }
    }
    creditar(valor) {
        this.saldo += valor;
    }
    toString() {
        return `Numero: ${this.numero} - Saldo: ${this.saldo}`;
    }
}

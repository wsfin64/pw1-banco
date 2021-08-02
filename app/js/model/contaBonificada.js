class ContaBonificada extends Conta {
    constructor(numero, saldo = 0) {
        super(numero, saldo);
        this.TAXA = 1.1;
    }
    creditar(valor) {
        super.creditar(valor * this.TAXA);
    }
}

class ContaBonificada extends Conta {

    private TAXA: number = 1.1;

    constructor(numero: string, saldo: number = 0) {
        super(numero, saldo);
    }

    creditar(valor: number) {
        super.creditar(valor * this.TAXA);
    }

}
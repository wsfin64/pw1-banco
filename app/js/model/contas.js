class Contas {
    constructor() {
        this.contas = new Array();
        const c1 = new Conta('1', 100);
        const c2 = new Conta('2', 200);
        const cb = new ContaBonificada('3', 300);
        this.contas.push(c1, c2, cb);
    }
    listar() {
        return this.contas;
    }
    inserir(novaConta) {
        this.contas.push(novaConta);
    }
    pesquisar(numero) {
        return this.contas.find(conta => conta.getNumero() === numero);
    }
    remover(numero) {
        const contaARemover = this.pesquisar(numero);
        if (contaARemover) {
            const indiceConta = this.contas.indexOf(contaARemover);
            if (indiceConta > -1) {
                this.contas.splice(indiceConta, 1);
            }
        }
    }
}

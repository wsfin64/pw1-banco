class ContaController {
    private inputNumero: HTMLInputElement;
    private inputsaldo: HTMLInputElement;

    private contas: Contas;

    constructor() {
        this.inputNumero = <HTMLInputElement>document.querySelector('#conta');
        this.inputsaldo = <HTMLInputElement>document.querySelector('#saldo');

        this.contas = new Contas();

    }

    listar(){
        this.contas.listar().forEach(conta => this.inserirContaNoHTML(conta));
    }

    inserir(evento: Event): void {
        evento.preventDefault(); //evitar que a página atualize

        const novaConta = new Conta(this.inputNumero.value, parseFloat(this.inputsaldo.value));
        this.contas.inserir(novaConta);
        this.inserirContaNoHTML(novaConta);
    }

    private inserirContaNoHTML(conta: Conta): void {
        const elementoP = document.createElement('p');
        elementoP.textContent = conta.toString();

        const botaoApagar = document.createElement('button');
        botaoApagar.textContent = 'X';

        elementoP.appendChild(botaoApagar);
        document.body.appendChild(elementoP);

        // click do botao

        botaoApagar.addEventListener('click', (event) => {
            this.contas.remover(conta.getNumero());
            (<Element>event.target).parentElement.remove();
        });

    }
}

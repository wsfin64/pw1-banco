class Clientes {

    private clientes: Array<Cliente>;

    constructor() {
        this.clientes = new Array<Cliente>();

    }

    listar(): Array<Cliente> {
        return this.clientes;
    }

    inserir(novoCliente: Cliente): void {
        this.clientes.push(novoCliente);
    }

    pesquisar(cpf:string): Cliente {
        return this.clientes.find(cliente => cliente.getCPF() === cpf);
    }

    remover(cpf: string): void {
        const clienteARemover = this.pesquisar(cpf);
        if (clienteARemover){
            const indiceCliente = this.clientes.indexOf(clienteARemover);
            if (indiceCliente > -1){
                this.clientes.splice(indiceCliente, 1);
            }
        }
    }
}
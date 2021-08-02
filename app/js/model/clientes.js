class Clientes {
    constructor() {
        this.clientes = new Array();
    }
    listar() {
        return this.clientes;
    }
    inserir(novoCliente) {
        this.clientes.push(novoCliente);
    }
    pesquisar(cpf) {
        return this.clientes.find(cliente => cliente.getCPF() === cpf);
    }
    remover(cpf) {
        const clienteARemover = this.pesquisar(cpf);
        if (clienteARemover) {
            const indiceCliente = this.clientes.indexOf(clienteARemover);
            if (indiceCliente > -1) {
                this.clientes.splice(indiceCliente, 1);
            }
        }
    }
}

// let c1 = new Conta('123', 100);
// const cb = new ContaBonificada('2', 100);
// let valorDigitado = prompt('Digite o valor a ser creditado:');
// c1.creditar(parseFloat(valorDigitado));
// cb.creditar(50);
// console.log(c1.getSaldo());
// console.log((cb.getSaldo()));

// const contas: Contas = new Contas();
// contas.listar().forEach(conta => console.log(conta.toString()));
//
// contas.remover('2');
// contas.listar().forEach(conta => console.log(conta.toString()));

const contaController = new ContaController();
contaController.listar();

const clientes: Clientes = new Clientes();

let cli1: Cliente = new Cliente('Antonio', '88888', '4');
let cli2: Cliente = new Cliente('Maria', '46464', '6');
clientes.inserir(cli1);
clientes.inserir(cli2);

clientes.listar().forEach(cliente => console.log(cliente.toString()));

console.log(clientes.pesquisar('46464'));
clientes.remover('46464');
clientes.listar().forEach(cliente => console.log(cliente.toString()));


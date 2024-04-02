
const prompt = require('prompt-sync')();


class ItemMenu {
    constructor(codigo, nome, preco) {
        this.codigo = codigo;
        this.nome = nome;
        this.preco = preco;
    }
}


const menu = [
    new ItemMenu(1, "Cachorro Quente", 4.00),
    new ItemMenu(2, "X-Salada", 4.50),
    new ItemMenu(3, "X-Bacon", 5.00),
    new ItemMenu(4, "Torrada simples", 2.00),
    new ItemMenu(5, "Refrigerante", 1.50)
];


function calcularTotalPedido(pedido) {
    let total = 0;
    for (let i = 0; i < pedido.length; i++) {
        const item = menu.find(menuItem => menuItem.codigo === pedido[i].codigo);
        if (item) {
            total += item.preco * pedido[i].quantidade;
        }
    }
    return total.toFixed(2);
}


function main() {
    const n = parseInt(prompt('Quantos itens deseja pedir? '));
    const pedido = [];

    // Obtendo os itens do pedido
    for (let i = 0; i < n; i++) {
        const codigo = parseInt(prompt('Digite o código do item: '));
        const quantidade = parseInt(prompt('Digite a quantidade: '));
        pedido.push({ codigo, quantidade });
    }

    
    const total = calcularTotalPedido(pedido);
    console.log(`Total: R$ ${total}`);
}

// Executando o programa
main();

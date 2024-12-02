
const menu = [
    { nome: "Margherita", descricao: "Molho de tomate, mozzarella e manjericão.", preco: "R$ 30,00" },
    { nome: "Calabresa", descricao: "Mozzarella, calabresa e cebola.", preco: "R$ 35,00" },
    { nome: "Quatro Queijos", descricao: "Mozzarella, gorgonzola, parmesão e provolone.", preco: "R$ 40,00" },
    { nome: "Portuguesa", descricao: "Presunto, ovo, cebola, azeitona e pimentão.", preco: "R$ 38,00" },
];


const menuContainer = document.getElementById('menuItems');
const pizzaSelect = document.getElementById('pizzaSelecionada');

menu.forEach((pizza, index) => {

    const item = document.createElement('div');
    item.className = 'col-md-6 col-lg-4 mb-4';
    item.innerHTML = `
        <div class="card shadow">
            <div class="card-body">
                <h5 class="card-title">${pizza.nome}</h5>
                <p class="card-text">${pizza.descricao}</p>
                <p class="card-text"><strong>${pizza.preco}</strong></p>
            </div>
        </div>
    `;
    menuContainer.appendChild(item);

  
    const option = document.createElement('option');
    option.value = pizza.nome;
    option.textContent = `${pizza.nome} - ${pizza.preco}`;
    pizzaSelect.appendChild(option);
});


document.getElementById('pedidoForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const nomeCliente = document.getElementById('nomeCliente').value;
    const telefone = document.getElementById('telefone').value;
    const pizza = document.getElementById('pizzaSelecionada').value;

    if (nomeCliente && telefone && pizza) {
        alert(`Pedido realizado com sucesso!\nCliente: ${nomeCliente}\nPizza: ${pizza}\nTelefone: ${telefone}`);
        this.reset();
    } else {
        alert('Por favor, preencha todos os campos.');
    }
});

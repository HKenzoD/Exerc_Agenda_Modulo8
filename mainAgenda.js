const form = document.getElementById("agendaContatos");
const contatos = [];

let linhas = '';

form.addEventListener('submit', function(e) {
    e.preventDefault();

    adicionarLinha();
    atualizarTabela();
    atualizaNumContatos();
})

function adicionarLinha() {
    const inputNome = document.getElementById('nome-contato');
    const inputTel = document.getElementById('numero-tel');

    if (contatos.includes(inputNome.value)) {
        alert(`O contato ${inputNome.value} já foi inserido`);
    } else {
        let linha = '<tr>';
        linha += `<td>${inputNome.value}</td>`;
        linha += `<td>${inputTel.value}</td>`;
        linha += '</tr>';

        linhas += linha;

        contatos.push(inputNome.value);
    }

    inputNome.value = '';
    inputTel.value = '';
}

function atualizarTabela() {
    const corpoTabela = document.querySelector('tbody');
    corpoTabela.innerHTML = linhas;
}

function atualizaNumContatos() {
    const totalContatos = contaContatos();
    document.getElementById('total-contatos').innerHTML = totalContatos;
}

function contaContatos() {
    let calcContatos = 0;

    for (let i = 0; i < contatos.length; i++) {
        calcContatos += contatos[i];
    }

    return contatos.length;
}
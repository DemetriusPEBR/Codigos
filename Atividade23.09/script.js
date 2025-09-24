let tarefa = document.getElementById("tarefa");
let botaoSalvar = document.getElementById("salvar");
let cardTarefasSalvas = document.getElementById("salvar");
let tarefasSalvas = ["Nova Tarefa"];

botaoSalvar.addEventListener("click", function(e) {
    e.preventDefault();
    if (tarefa.value.trim() !== "") {
        tarefasSalvas.push(tarefa.value.trim());
        atualizarTarefas();
        tarefa.value = "";
    };
});

function atualizarTarefas() {
    cardTarefasSalvas.innerHTML = "";
    tarefasSalvas.forEach((tarefa,index) => {
        let novoCard = document.createElement("div");
        novoCard.innerHTML = `
        <span>${tarefa}</span>
        <button onclick="editarTarefa(${index})">Editar</button>
        <button onclick="deletarTarefa(${index})">Deletar</button>
        `;
        cardTarefasSalvas.appendChild(novoCard);
});
}

window.editarTarefa = function(index) {
    let novaTarefa = prompt("Edite a tarefa:", tarefasSalvas[index]);
    if (novaTarefa !== null) {
        tarefasSalvas[index] = novaTarefa.trim();
        atualizarTarefas();
    }
}

window.deletarTarefa = function(index) {
    if (confirm("Tem certeza que deseja deletar esta tarefa?")) {
        tarefasSalvas.splice(index, 1);
        atualizarTarefas();
    }   
}

atualizarTarefas();

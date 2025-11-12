function agendar(){
    const nome = document.getElementById('nome').value;
    const data = document.getElementById('data').value;
    const hora = document.getElementById('hora').value;

    if (!nome || !data || !hora){
        alert("Preencha todos os campos!");
        return;
    }

    const lista = document.getElementById('listaAgendamento');
    const lista = document.createElement('p');
    item.textContent = '${nome} agendou para ${data} às ${hora}';
    lista.appendChild(item);
}

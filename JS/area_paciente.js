async function carregarMeusAgendamentos(){

    const resposta = await fetch("http://127.0.0.1:5000/meus-agendamentos?id_paciente=1");

    const dados = await resposta.json();

    const lista = document.getElementById("listaAgendamentos");

    lista.innerHTML = "";

    if(dados.length === 0){
        lista.innerHTML = "<p>Nenhum agendamento encontrado.</p>";
        return;
    }

    dados.forEach(item => {

        const card = document.createElement("div");
        card.classList.add("card-agendamento");

        card.innerHTML = `
    <h2>${item.especialidade}</h2>
    <p><strong>Data:</strong> ${item.data_consulta}</p>
    <p><strong>Horário:</strong> ${item.horario}</p>
    <p><strong>Sala:</strong> ${item.sala}</p>
    <p><strong>Estagiário:</strong> ${item.estagiario}</p>
    <p><strong>Status:</strong> ${item.status}</p>

    <button class="btn-cancelar" onclick="cancelarAgendamento(${item.id_agendamento})">
        Cancelar Consulta
    </button>
    `;

        lista.appendChild(card);
    });
}



async function cancelarAgendamento(id_agendamento){

    const confirmar = confirm("Deseja cancelar este agendamento?");

    if(!confirmar){
        return;
    }

    const resposta = await fetch("http://127.0.0.1:5000/cancelar-agendamento", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            id_agendamento: id_agendamento
        })
    });

    const resultado = await resposta.json();

    alert(resultado.mensagem || resultado.erro);

    carregarMeusAgendamentos();
}

carregarMeusAgendamentos();



function configurarUsuarioLogado(){

    const nomeCompleto = localStorage.getItem("nome_paciente");

    const bemVindo = document.getElementById("bemVindo");

    if(nomeCompleto){
        const primeiroNome = nomeCompleto.split(" ")[0];
        bemVindo.textContent = "Bem-vindo, " + primeiroNome;
    }
}

configurarUsuarioLogado();

const btnSair = document.getElementById("btnSair");

btnSair.addEventListener("click", () => {
    localStorage.removeItem("id_paciente");
    localStorage.removeItem("nome_paciente");

    window.location.href = "hea.html";
});
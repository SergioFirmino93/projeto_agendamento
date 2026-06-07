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
        `;

        lista.appendChild(card);
    });
}

carregarMeusAgendamentos();
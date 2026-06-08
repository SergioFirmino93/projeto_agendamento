
const dia1 = document.getElementById("dia1");
const dia2 = document.getElementById("dia2");
const dia3 = document.getElementById("dia3");

let dataBase = new Date();

let dataSelecionada = 0;
let indiceAgenda = 0;

function formatarData(data){

    let dia = String(data.getDate()).padStart(2, '0');

    let mes = String(data.getMonth() + 1).padStart(2, '0');

    return `${dia}/${mes}`;
}

function atualizarData(){

    const data1 = new Date(dataBase);

    const data2 = new Date(dataBase);
    data2.setDate(data2.getDate() + 1);
    
    const data3 = new Date(dataBase)
    data3.setDate(data3. getDate () + 2);

    dia1.textContent = formatarData(data1);
    dia2.textContent = formatarData(data2);
    dia3.textContent = formatarData(data3);
}
atualizarData();

document.getElementById("proximo").addEventListener("click", () => {

    dataBase.setDate(dataBase.getDate() + 1);

    atualizarData();

    calendario.value = dataBase.toISOString().split("T")[0];

    consultarHorarios();
});




document.getElementById("anterior").addEventListener("click", () => {

    dataBase.setDate(dataBase.getDate() - 1);

    atualizarData();

    calendario.value = dataBase.toISOString().split("T")[0];

    consultarHorarios();
});


const calendario = document.getElementById("calendario");

calendario.addEventListener("change", () => {

    dataBase = new Date(calendario.value);

    atualizarData();

    consultarHorarios();
});

const caixa1 = document.getElementById("caixa1");
const caixa2 = document.getElementById("caixa2");
const caixa3 = document.getElementById("caixa3");





function selecionarData(indice){

    caixa1.classList.remove("ativa");
    caixa2.classList.remove("ativa");
    caixa3.classList.remove("ativa");

    if(indice === 0){
        caixa1.classList.add("ativa");
        
    }

    if(indice === 1){
        caixa2.classList.add("ativa");

    }

    if(indice === 2){
        caixa3.classList.add("ativa");
    }

    dataSelecionada = indice;

    console.log("Data selecionada:", indice);

  
    
}

    caixa1.addEventListener("click", () => {
    selecionarData(0);

    const data = new Date(dataBase);
    calendario.value = data.toISOString().split("T")[0];

    consultarHorarios();
});

    caixa2.addEventListener("click", () => {
    selecionarData(1);

    const data = new Date(dataBase);
    data.setDate(data.getDate() + 1);

    calendario.value = data.toISOString().split("T")[0];

    consultarHorarios();
});

    caixa3.addEventListener("click", () => {
    selecionarData(2);

    const data = new Date(dataBase);
    data.setDate(data.getDate() + 2);

    calendario.value = data.toISOString().split("T")[0];

    consultarHorarios();
});






    const agenda = {

        0: [
            {
            sala: "Sala 1",
            estagiario: "Marcos Aurelio",
            horario: [
                "12:00",
                "13:55",
                "15:00",
                "16:00",
                "17:20"
            ]
            
            },

            { 
            sala: "Sala 2",
            estagiario: "Carlos Palma",
            horario: [
                "13:11",
                "14:50",
                "16:25",
                "17:15",
                "18:10"
                ]
            },

            { 
            sala: "Sala 3",
            estagiario: "Manoel Santos",
            horario: [
                "09:45",
                "11:30",
                "12:58",
                "14:00",
                "15:30"
            ]
            },

            { 
            sala: "Sala 4",
            estagiario: "Murilo Gomes",
            horario: [
                     "13:45",
                     "14:30",
                     "15:25",
                     "16:10",
                     "17:00"
            ]
            },

            { 
            sala: "Sala Infantil",
            estagiario: "Sergio Paiva",
            horario: [
                     "14:00",
                     "15:05",
                     "16:35",
                     "17:20",
                     "18:15"
            ]
            }

        ],

   


        1: [
            {
            sala: "Sala 1",
            estagiario: "Marco Suplici",
            horario:  [
                     "12:15",
                     "14:20",
                     "15:35",
                     "16:58",
                     "17:45"
            ]
            },

            { 
            sala: "Sala 2",
            estagiario: "Fernando Campos",
            horario:  [
                     "13:10",
                     "14:25",
                     "15:35",
                     "16:20",
                     "17:15"
            ]
            },

            { 
            sala: "Sala 3",
            estagiario: "Mateus Firmino",
            horario:  [
                     "08:35",
                     "13:20",
                     "15:15",
                     "16:40",
                     "17:25"
            ]
            },

            { 
            sala: "Sala 4",
            estagiario: "Moises Santos",
            horario:  [
                     "10:00",
                     "11:00",
                     "12:05",
                     "14:10",
                     "16:00"
            ]
            },


            { 
            sala: "Sala Infantil",
            estagiario: "Marcos Aurelio",
            horario:  [
                     "13:35",
                     "14:28",
                     "15:00",
                     "16:20",
                     "17:35"
            ]
            }
        
        ],


        2: [
            {
            sala: "Sala 1",
            estagiario: "Gabriela Santos",
            horario:  [
                     "08:35",
                     "09:40",
                     "12:15",
                     "14:05",
                     "16:30"
            ]
            },

            { 
            sala: "Sala 2",
            estagiario: "Juliano Moura",
            horario:  [
                     "07:15",
                     "08:55",
                     "11:52",
                     "13:20",
                     "15:35"
            ]
            },

            { 
            sala: "Sala 3",
            estagiario: "Fernando Palma",
            horario:  [
                     "07:40",
                     "08:45",
                     "11:30",
                     "13:04",
                     "16:35"
            ]
            },

            { 
            sala: "Sala 4",
            estagiario: "Carlos Aurelio",
            horario:  [
                     "13:13",
                     "15:20",
                     "16:15",
                     "17:00",
                     "18:40"
            ]
            },


            { 
            sala: "Sala Infantil",
            estagiario: "Marcos Augusto",
            horario:  [
                     "09:00",
                     "12:00",
                     "14:00",
                     "15:05",
                     "17:00"
            ]
            }
        ]
    };

    const sala1 = document.getElementById("sala1");
    const estagiario1 = document.getElementById("estagiario1");
    const horario1 = document.getElementById("horario1");

    const sala2 = document.getElementById("sala2");
    const estagiario2 = document.getElementById("estagiario2");
    const horario2 = document.getElementById("horario2");
    
    const sala3 = document.getElementById("sala3");
    const estagiario3 = document.getElementById("estagiario3");
    const horario3 = document.getElementById("horario3");

    const sala4 = document.getElementById("sala4");
    const estagiario4 = document.getElementById("estagiario4");
    const horario4 = document.getElementById("horario4");

    const sala5 = document.getElementById("sala5");
    const estagiario5 = document.getElementById("estagiario5")
    const horario5 = document.getElementById("horario5")


    function carregarAgenda(indice){

    sala1.textContent = agenda[indice][0].sala;
    estagiario1.textContent = agenda[indice][0].estagiario;
    mostrarHorarios(horario1, agenda[indice][0].horario);

    sala2.textContent = agenda[indice][1].sala;
    estagiario2.textContent = agenda[indice][1].estagiario;
    mostrarHorarios(horario2, agenda[indice][1].horario);

    sala3.textContent = agenda[indice][2].sala;
    estagiario3.textContent = agenda[indice][2].estagiario;
    mostrarHorarios(horario3, agenda[indice][2].horario);

    sala4.textContent = agenda[indice][3].sala;
    estagiario4.textContent = agenda[indice][3].estagiario;
    mostrarHorarios(horario4, agenda[indice][3].horario);

    sala5.textContent = agenda[indice][4].sala;
    estagiario5.textContent = agenda[indice][4].estagiario;
    mostrarHorarios(horario5, agenda[indice][4].horario);
}

    carregarAgenda(0);

   
    function mostrarHorarios(container, horarios){

    container.innerHTML = "";

    horarios.forEach(hora => {

        const botao = document.createElement("button");

        botao.textContent = hora;

        botao.addEventListener("click", () => {
            alert("Horário selecionado: " + hora);
        });

        container.appendChild(botao);
    });
}


function montarCardsDoBanco(dados){

    const lista = document.querySelector(".lista-salas");

    lista.innerHTML = "";

    const grupos = {};

    dados.forEach(item => {

        const chave = item.sala + "-" + item.estagiario;

        if(!grupos[chave]){
            grupos[chave] = {
                sala: item.sala,
                estagiario: item.estagiario,
                horarios: []
            };
        }

        grupos[chave].horarios.push({
            id_horario: item.id_horario,
            horario: item.horario
        });
    });

    Object.values(grupos).forEach(grupo => {

        const card = document.createElement("div");
        card.classList.add("card-sala");

        const titulo = document.createElement("h2");
        titulo.textContent = grupo.sala;

        const estagiario = document.createElement("p");
        estagiario.textContent = "Estagiário: " + grupo.estagiario;

        const divHorarios = document.createElement("div");
        divHorarios.classList.add("horarios");

        grupo.horarios.forEach(h => {

            const botao = document.createElement("button");

            botao.textContent = h.horario.substring(0, 5);

            botao.addEventListener("click", async () => {

                const confirmar = confirm(
                    "Deseja agendar este horário?\n\n" +
                    grupo.sala + "\n" +
                    grupo.estagiario + "\n" +
                    h.horario.substring(0, 5)
                );

                if(confirmar){

                    const resposta = await fetch("http://127.0.0.1:5000/agendar", {
                        method: "POST",
                        headers: {
                            "Content-Type": "application/json"
                        },
                        body: JSON.stringify({
                            id_paciente: 1,
                            id_horario: h.id_horario
                        })
                    });

                    const resultado = await resposta.json();

                    alert(resultado.mensagem || resultado.erro);

                    if(resposta.ok){
                        botao.disabled = true;
                        botao.textContent = "Agendado";
                        botao.classList.add("agendado");
                    }
                }

            });

            divHorarios.appendChild(botao);
        });

        card.appendChild(titulo);
        card.appendChild(estagiario);
        card.appendChild(divHorarios);

        lista.appendChild(card);
    });
}


const btnConsultar = document.getElementById("btnConsultar");

btnConsultar.addEventListener("click", () => {
    consultarHorarios();
});


async function consultarHorarios(){

    const especialidade = document.getElementById("especialidade").value;
    const data = document.getElementById("calendario").value;

    if(especialidade === "" || data === ""){
        return;
    }

    const resposta = await fetch(
        `http://127.0.0.1:5000/horarios?especialidade=${especialidade}&data=${data}`
    );

    const dados = await resposta.json();

    console.log(dados);

    montarCardsDoBanco(dados);
}





window.addEventListener("load", () => {

    const especialidadeSalva = localStorage.getItem("especialidadeSelecionada");

    if(especialidadeSalva){
        document.getElementById("especialidade").value = especialidadeSalva;

        const hoje = new Date();
        calendario.value = hoje.toISOString().split("T")[0];

        consultarHorarios();
    }

});


function configurarUsuarioLogado(){

    const nomeCompleto = localStorage.getItem("nome_paciente");

    const bemVindo = document.getElementById("bemVindo");
    const btnLogin = document.getElementById("btnLogin");
    const btnCadastro = document.getElementById("btnCadastro");
    const btnSair = document.getElementById("btnSair");

    if(nomeCompleto){

        const primeiroNome = nomeCompleto.split(" ")[0];

        if(bemVindo){
            bemVindo.textContent = "Bem-vindo, " + primeiroNome;
        }

        if(btnLogin){
            btnLogin.style.display = "none";
        }

        if(btnCadastro){
            btnCadastro.style.display = "none";
        }

        if(btnSair){
            btnSair.style.display = "inline-block";
        }
    }

    if(btnSair){
        btnSair.addEventListener("click", () => {
            localStorage.removeItem("id_paciente");
            localStorage.removeItem("nome_paciente");
            window.location.reload();
        });
    }
}

configurarUsuarioLogado();



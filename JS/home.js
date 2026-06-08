const btnBuscarHome = document.getElementById("btnBuscarHome");

btnBuscarHome.addEventListener("click", () => {
    const especialidade = document.getElementById("especialidadeHome").value;

    localStorage.setItem("especialidadeSelecionada", especialidade);

    window.location.href = "agendamentos.html";
});


function configurarUsuarioLogado(){

    const nomeCompleto = localStorage.getItem("nome_paciente");

    const bemVindo = document.getElementById("bemVindo");
    const btnLogin = document.getElementById("btnLogin");
    const btnCadastro = document.getElementById("btnCadastro");
    const btnSair = document.getElementById("btnSair");

    if(nomeCompleto){

        const primeiroNome = nomeCompleto.split(" ")[0];

        bemVindo.textContent = "Bem-vindo, " + primeiroNome;

        btnLogin.style.display = "none";
        btnCadastro.style.display = "none";
        btnSair.style.display = "inline-block";
    }

    btnSair.addEventListener("click", () => {
        localStorage.removeItem("id_paciente");
        localStorage.removeItem("nome_paciente");
        window.location.reload();
    });
}

configurarUsuarioLogado();
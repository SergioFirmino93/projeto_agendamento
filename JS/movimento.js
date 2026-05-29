
const datas = [
    "29/05",
    "30/05",
    "31/05",
    "01/06",
    "02/06"
];

let indice = 0;

const dataAtual = document.getElementById("dataAtual");

document.getElementById("proximo").addEventListener("click", () => {

    indice++;

    if(indice >= datas.length){
        indice = 0;
    }

    dataAtual.textContent = datas[indice];

});


document.getElementById("anterior").addEventListener("click", () => {

    indice--;

    if(indice < 0){
        indice = datas.length - 1;
    }

    dataAtual.textContent = datas[indice];

});





const base = new Date();

function atualizarDatas(){

    const d1 = new Date(base);
    const d2 = new Date(base);
    const d3 = new Date(base);

    d2.setDate(d2.getDate() + 1);
    d3.setDate(d3.getDate() + 2);

    document.getElementById("dia1").textContent =
        d1.toLocaleDateString("pt-BR");

    document.getElementById("dia2").textContent =
        d2.toLocaleDateString("pt-BR");

    document.getElementById("dia3").textContent =
        d3.toLocaleDateString("pt-BR");
}

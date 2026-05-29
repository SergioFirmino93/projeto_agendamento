
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







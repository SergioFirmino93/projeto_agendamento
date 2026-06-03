
const dia1 = document.getElementById("dia1");
const dia2 = document.getElementById("dia2");
const dia3 = document.getElementById("dia3");

let dataBase = new Date();

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

});


document.getElementById("anterior").addEventListener("click", () => {

    dataBase.setDate(dataBase.getDate() - 1);

    atualizarData();

});


const calendario = document.getElementById("calendario");

calendario.addEventListener("change", () => {

    dataBase = new Date(calendario.value);

    atualizarData();

});

const caixa1 = document.getElementById("caixa1");
const caixa2 = document.getElementById("caixa2");
const caixa3 = document.getElementById("caixa3");

let dataSelecionada = 0;



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
    });

    caixa2.addEventListener("click", () => {
        selecionarData(1);
    });

    caixa3.addEventListener("click", () => {
        selecionarData(2);
    });
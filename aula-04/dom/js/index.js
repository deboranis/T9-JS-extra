// getElementById, querySelector, addEventListener, evento.preventDefault(), getElementById, createElement, appendChild.

// CSS que será utilizado no JavaScript:

// lista__form
// extrato__table
// listaInputNome
// listaInputValor
// listaInputData

// ________
// Para criar a tabela: 

// tr - table row
// td - table data

// 1. Dado o código com comportamentos nos inputs de pegar os valores e adicionar na tabela, de acordo com o exemplo deste site: https://listagastos.oskojess.repl.co/.

// Com o código disponibilizado, 
// Utilize o index.js para criar esses comportamentos e inserir nos inputs do HTML. 

window.addEventListener("DOMContentLoaded", () => {

    const formulario = document.querySelector(".lista__form");

    let tabela = document.querySelector(".extrato__table");

    formulario.addEventListener("submit", function(evento) {
        evento.preventDefault();
        const listaInputNome = document.getElementById("lista__input_item").value;

        const listaInputValor = document.getElementById("lista__input_valor").value;

        const listaInputData = document.getElementById("lista__input_data").value;

        let criarLinha = document.createElement("tr");
        let criarDadoNome = document.createElement("td");
        let criarDadoValor = document.createElement("td");
        let criarDadoData = document.createElement("td");

        tabela.appendChild(criarLinha);

        criarLinha.appendChild(criarDadoNome);
        criarLinha.appendChild(criarDadoValor);
        criarLinha.appendChild(criarDadoData);
        criarDadoNome.textContent = listaInputNome;
        criarDadoValor.textContent = listaInputValor;
        criarDadoData.textContent = listaInputData;
    });

})
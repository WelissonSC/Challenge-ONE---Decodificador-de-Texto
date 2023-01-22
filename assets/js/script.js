
// As "chaves" de criptografia que utilizaremos são:
// A letra "e" é convertida para "enter"
// A letra "i" é convertida para "imes"
// A letra "a" é convertida para "ai"
// A letra "o" é convertida para "ober"
// A letra "u" é convertida para "ufat"


function criptografar() {
    let texto = document.querySelector('#campoTexto').value.toLowerCase();
    let campoTradutor = document.querySelector(".tradutorContainer")

    const char = '[a-zA-Z0-9]';

    if (!texto.match(char)) {
        alert("TEXTO INVALIDO! Favor escrever texto sem o uso de caracteres especiais")
    }


    let cripto = texto.replace(/e/g, "enter").replace(/i/g, "imes").replace(/a/g, "ai").replace(/o/g, "ober").replace(/u/g, "ufat");

    campoTradutor.innerHTML = `<textarea readonly class="resposta" cols="45" rows="20">${cripto}</textarea>
    <button type="submit" class="btnCopiar" onclick="copiar()">Copiar</button>
    <input type="button" value="Limpar" class="limparBtn" onclick="limpaTexto()">
    `
    return cripto;
}

function descriptografar() {
    let texto = document.querySelector('#campoTexto').value.toLowerCase();
    let campoTradutor = document.querySelector(".tradutorContainer");

    let cripto = texto.replace(/enter/g, "e").replace(/imes/g, "i").replace(/ai/g, "a").replace(/ober/g, "o").replace(/ufat/g, "u");

    campoTradutor.innerHTML = `<textarea readonly class="resposta" cols="45" rows="20">${cripto}</textarea>
   <button type="submit" class="btnCopiar" onclick="copiar()">Copiar</button>
   <input type="button" value="Limpar" class="limparBtn" onclick="limpaTexto()">
   `

}

function copiar() {
    let btn = document.querySelector(".btnCopiar");
    let textoCopia = document.querySelector(".resposta").value;
    navigator.clipboard.writeText(textoCopia).then(() => {
        btn.textContent = "Copiado";
        btn.style.cssText =
            'color: white;' +
            'background: green;'
    });
}


function limpaTexto() {
    let limparBtn = document.querySelector(".limparBtn")
    let textoCampoResposta = document.querySelector(".resposta");
    let texto = document.querySelector("#campoTexto");

    limparBtn.textContent = "Limpo";
    limparBtn.style.cssText = 
        'color = white;' +
        'background = #0A3871;';

    textoCampoResposta.value = " ";
    texto.value = " ";

}

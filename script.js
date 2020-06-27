var primeiroNumero
var segundoNumero

var resposta

function numero() {
    var aleatorio = Math.random()
    var maximo = aleatorio * 8
    var exatas = Math.floor(maximo)
    var resultado = exatas + 2
    return resultado
}

function novoJogo() {
    primeiroNumero = numero()
    segundoNumero = numero()

    var divResultado = document.getElementById("numA")

    divResultado.innerHTML = primeiroNumero + " x " + segundoNumero

    if (recognition) recognition.start();
}

function gerarResultado() {
    resposta = Number(primeiroNumero * segundoNumero)
    var inputNumB = document.getElementById("numB")
    numB = Number(inputNumB.value)
    if (numB === resposta) {
        alert('acertou')
    } else {
        alert('errou')
    }
}
function verificarParOuImpar() {
    var numero = document.getElementById("numero").value;
    var resultado = document.getElementById("resultado");

    if (numero % 2 === 0) {
        resultado.textContent = numero + " O número digitado é par.";
        resultado.style.color = "blue";
    } else {
        resultado.textContent = numero + " O número digitado é ímpar.";
        resultado.style.color = "orange";
    }
}
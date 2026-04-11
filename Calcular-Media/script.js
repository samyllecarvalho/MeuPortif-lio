function calcular() {
    let nota1 = parseFloat(document.getElementById('nota1').value);
    let nota2 = parseFloat(document.getElementById('nota2').value);
    let nota3 = parseFloat(document.getElementById('nota3').value);
    let nota4 = parseFloat(document.getElementById('nota4').value);
    let nota5 = parseFloat(document.getElementById('nota5').value);
    let nota6 = parseFloat(document.getElementById('nota6').value);

    if (isNaN(nota1) || isNaN(nota2) || isNaN(nota3) || isNaN(nota4) || isNaN(nota5) || isNaN(nota6)) {
         alert("Por favor, insira todas as notas corretamente antes de calcular a média.");
         return;
    }

    let media = (nota1 + nota2 + nota3 + nota4 + nota5 + nota6) / 6;
    let resultado = document.getElementById('resultado');

    if(media >= 7) {
        resultado.innerText= "Média:" + media + " - Aprovado no semestre";
        resultado.style.color = "green";
     } else {
        resultado.innerText = "Média:" + media + " - Reprovado no semestre";
        resultado.style.color = "red";
     }
}
     function limparFormulario() {
      let inputs = document.querySelectorAll('input[type="number"]');
      inputs.forEach(input => input.value = '');
      let resultado = document.getElementById('resultado');
      if (resultado) {
      resultado.innerText = '';
    }
}
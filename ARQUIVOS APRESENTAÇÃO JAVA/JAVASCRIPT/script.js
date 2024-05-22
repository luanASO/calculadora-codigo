var numero1 = document.getElementById("numero1"); // pega o elemento com o id "numero1" no html.
var numero2 = document.getElementById("numero2"); // pega o elemento com o id "numero2" no html.
var resutaldo = document.getElementById("resultado"); // pega o elemento com o id "resultado" no html.

var operacoes = document.getElementsByClassName("operacao-container"); // pega o elemento com classe "operacao-container" no html.

// Aqui vai varrer os conteudos que estão na variável "operacoes" e adiciona cada um  por vez na variavel (operacao).
for (operacao of operacoes) {
  operacao.addEventListener("click", verificarOperacao); // Adiciona um evento "click" nos elementos percorridos e quando clicado executa a funçãp "verificarOperacao".
}

// Quando a operacao for clicada executa essa função.
function verificarOperacao(operacao) {
  var num1 = Number(numero1.value); // pega o valor digitado pelo usuario e transforma em número.
  var num2 = Number(numero2.value); // pega o valor digitado pelo usuario e transforma em número.

  if (num1 == 0 && num2 == 0) {
    alert("Digite um número em um dos campos, por favor!");
  }

  var classe = operacao.target.getAttribute("class"); // pega a classe do elemento clicado.

  switch (
    classe // verifica a classe e caso seja algum, vai fazer o calculo.
  ) {
    case "operacao adi": // se a classe for "operacao adi" somar e assim por diante.
      var res = num1 + num2;
      break;
    case "operacao sub":
      var res = num1 - num2;
      break;
    case "operacao mul":
      var res = num1 * num2;
      break;
    case "operacao div":
      if (num2 == 0) {
        alert("Não é possível dividir por 0!");
      } else {
        var res = num1 / num2;
      }
      break;
    default:
      alert("Tá errando o botão, aperte no botão corretamente MEO!");
  }

  mostrarResultado(res); // Executa a funcao para mostrar o resultado
}

function mostrarResultado(res) {
  resultado.innerHTML = `O resultado do seu cálculo é <span class="res">${res}</span>`; // adiciona no elemento HTML "resultado" a mensagem entre aspas "".
}

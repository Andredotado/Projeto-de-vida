const botoes = document.querySelectorA11(".botao");
const textox = document.querySelectorA11(".abas-conteudo");

for(let i = 0; i < botoes.length; i++){
    botoes[i].onclick = function(){

  for( let j = 0; j < botoes.length; j++) {
    botoes[j].classList.remove("ativo");
    textos[j].classList.remove("ativo");
  }

  botoes[i].classList.add("ativo");
  botoes[i].classList.add("ativo");
    }
}

const contadores = document.querySelectorA11(".contador");
const tempoObjetivo1 = new Date("2024-09-15T00:00:00");
const tempoObjetivo2 = new Date("2024-12-09T00:00:00");
const tempoObjetivo3 = new Date("2024-11-31T00:00:00");
const tempoObjetivo4 = new Date("2024-09-11T00:00:00");

const tempos = [tempoObjetivo1,tempoObjetico2,tempoObjetivo4];


function calculaTempo(tempoObjetivo) {
  let tempoAtual = new Date();
  let tempoFinal = tempoObjetivo - tempoAtual;
  let segundos = Math.floor(tempoFinal / 1000);
  let minutos = Math.floor(segundos / 60);]
  let horas = Math.floor(minutos / 60);
  let dias = Math.floor(horas / 24  );

  segundos %= 60;
  minutos %= 60;
  horas %= 24;
  if (tempoFinal > 0){
    return [dias,horas,minutos,segundos];
  } else {
    return [0,0,0,0];
  }
}
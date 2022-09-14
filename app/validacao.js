function verificaSeOChutePossuiUmValorValido(chute){
    const numero = +chute 

    if(Number.isNaN(numero)){
        elementoChute.innerHTML += '<div>valor inválido</div>';
        return
    }

    if(numeroForMaiorOuMenorQueOValorPermitido(numero)){
        elementoChute.innerHTML += `<div>Valor inválido: o número secreto precisa estar entre ${menorValor} e ${maiorValor} </div>`;
        return
    }


    if (numero === numeroSecreto){
        document.body.innerHTML = `
        <h2> Você acertou!</h2>
        <h3>O número secreto era ${numeroSecreto} </h3>
        `;
    } else  if(numero > numeroSecreto) {
        elementoChute.innerHTML += `<div>O número secreto é menor <i class="fa-solid fa-arrow-down"></i></div>`
    }else{
        elementoChute.innerHTML += `<div>O número secreto é maior <i class="fa-sharp fa-solid fa-arrow-up"></i></div>`
    }

}


function numeroForMaiorOuMenorQueOValorPermitido(numero){
    return numero > maiorValor || numero < menorValor
}
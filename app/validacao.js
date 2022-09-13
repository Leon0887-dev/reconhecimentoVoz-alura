function verificaSeOChutePossuiUmValorValido(chute){
    const numero = +chute 

    if(Number.isNaN(numero)){
       elementoChute.innerHTML += '<div>valor inválido</div>';
    }

    if(numeroForMaiorOuMenorQueOValorPermitido(numero)){
        elementoChute.innerHTML += `<div>Valor inválido: o número secreto precisa estar entre ${menorValor} e ${maiorValor} </div>`;
    }

}


function numeroForMaiorOuMenorQueOValorPermitido(numero){
    return numero > maiorValor || numero < menorValor
}
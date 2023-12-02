function verficaSeOChutePossuiUmValorValido(chute) {
    const numero = + chute

    if (chuteForInvalido(numero)) {
        if (chute = 'GAME OVER' || 'game over' || 'Game Over') {

            document.body.innerHTML =
                `
                <h2>Game Over!!!</h2>
                <h3>O número secreto era ${numeroSecreto} - Pressione o botão para jogar novamente</h3>
                <button id="jogar-novamente" class="btn-jogar" >Jogar novamente</button>
                `
                document.body.style.backgroundColor = "black";
        } else {

            elementoChute.innerHTML += '<div>Valor Inválido</div>'
            return
        }
    }


    if(numeroForMaiorOuMenorQueOValorPermitido(numero)){
        elementoChute.innerHTML += `<div> Valor invalido: o número secreto precisa estar entre ${menorvalor} e ${maiorValor}</div>`
        return
    }

    if(numero === numeroSecreto) {
        document.body.innerHTML = `
        <h2> Você acertou!</h2>
        <h3> O número secreto era ${numeroSecreto} </h3>
        
        <button id="jogar-novamente" class="btn-jogar"> Jogar Novamente </button>
        `
    } else if (numero > numeroSecreto) {
        elementoChute.innerHTML += ` <div>O número secreto é menor <i class="fa-solid fa-arrow-turn-down"></i></div>`
    } else {
        elementoChute.innerHTML += ` <div>O número secreto é maior <i class="fa-solid fa-arrow-turn-up"></i></div>`
    }
}

function chuteForInvalido(numero) {
    return Number.isNaN(numero)
}

function numeroForMaiorOuMenorQueOValorPermitido(numero) {
    return numero > maiorValor || numero < menorvalor
}


document.body.addEventListener('click', e => {
    if (e.target.id == 'jogar-novamente') {
        window.location.reload()
    }
})
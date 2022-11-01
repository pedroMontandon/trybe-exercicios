let paiDoPai = document.getElementById('paiDoPai');
for (i = 0; i < paiDoPai.clientHeight; i += 1){
    let element = paiDoPai[i]
    if (paiDoPai[i] == pai || paiDoPai[i] == elementoOndeVoceEsta || paiDoPai[i] == primeiroFilhoDoFilho){

    } else {
        paiDoPai.removeChild(element)
    }
}
console.log(paiDoPai)

// deu errado =(
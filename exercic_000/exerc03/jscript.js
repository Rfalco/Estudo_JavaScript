const aLstVal = []


function fAdiciona() {

    let nValInf = document.querySelector('#nValInf').value

    if (nValInf >= 1 && nValInf <= 100) {
        if (aLstVal.indexOf(nValInf) < 0) {
            aLstVal.push(nValInf)
            sLstNum.innerHTML += `Valor ${nValInf} adicionado.<br>`
        } else {
            window.alert(`Valor informado já foi listado ${nValInf}`)
        }

    } else {
        window.alert(`Valor informado está fora dos parâmetros ${nValInf}`)
    }

    document.querySelector('#nValInf').value = ""
    document.querySelector('#nValInf').focus()

}


function fFinal() {

    let nTotIte = 0
    let nPos = 0

    sSecPag.innerHTML = '<div id="sAnalise"></div>'

    sAnalise.innerHTML += `Itens incluídos: [${aLstVal}].<br>`

    sAnalise.innerHTML += `Total de itens ${aLstVal.length} adicionados.<br>`

    /// ORDENANDO ARRAY, ARRAYS NUMÉRICOS SÃO NECESSÁRIOS SEREM ORDENADOS COM UMA FUNÇÃO DE COMPARAÇÃO
    aLstVal.sort((a, b) => a - b)

    sAnalise.innerHTML += `O menor item é ${aLstVal[0]}.<br>`

    for (let nI = 0; nI < aLstVal.length; nI++) {
        nTotIte += Number(aLstVal[nI])
        nPos = nI
    }

    sAnalise.innerHTML += `O maior item é ${aLstVal[nPos]}.<br>`
    sAnalise.innerHTML += `A soma dos itens é ${nTotIte}.<br>`
    sAnalise.innerHTML += `A média da soma é ${nTotIte/aLstVal.length}.<br><br>`
    sAnalise.innerHTML += '<p> <input type="button" value="Limpar" id="btLimpar" onclick="location.reload(true)"></p>'
    

}
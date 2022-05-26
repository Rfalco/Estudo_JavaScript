
// https://www.youtube.com/watch?v=fxm8cadCqbs&ab_channel=FilipeDeschamps

const aFirePixels = []
const nFireWidth = 80
const nFireHeight = 50
const aLstCor = [{ "r": 7, "g": 7, "b": 7 }, { "r": 31, "g": 7, "b": 7 }, { "r": 47, "g": 15, "b": 7 }, { "r": 71, "g": 15, "b": 7 }, { "r": 87, "g": 23, "b": 7 }, { "r": 103, "g": 31, "b": 7 }, { "r": 119, "g": 31, "b": 7 }, { "r": 143, "g": 39, "b": 7 }, { "r": 159, "g": 47, "b": 7 }, { "r": 175, "g": 63, "b": 7 }, { "r": 191, "g": 71, "b": 7 }, { "r": 199, "g": 71, "b": 7 }, { "r": 223, "g": 79, "b": 7 }, { "r": 223, "g": 87, "b": 7 }, { "r": 223, "g": 87, "b": 7 }, { "r": 215, "g": 95, "b": 7 }, { "r": 215, "g": 95, "b": 7 }, { "r": 215, "g": 103, "b": 15 }, { "r": 207, "g": 111, "b": 15 }, { "r": 207, "g": 119, "b": 15 }, { "r": 207, "g": 127, "b": 15 }, { "r": 207, "g": 135, "b": 23 }, { "r": 199, "g": 135, "b": 23 }, { "r": 199, "g": 143, "b": 23 }, { "r": 199, "g": 151, "b": 31 }, { "r": 191, "g": 159, "b": 31 }, { "r": 191, "g": 159, "b": 31 }, { "r": 191, "g": 167, "b": 39 }, { "r": 191, "g": 167, "b": 39 }, { "r": 191, "g": 175, "b": 47 }, { "r": 183, "g": 175, "b": 47 }, { "r": 183, "g": 183, "b": 47 }, { "r": 183, "g": 183, "b": 55 }, { "r": 207, "g": 207, "b": 111 }, { "r": 223, "g": 223, "b": 159 }, { "r": 239, "g": 239, "b": 199 }, { "r": 255, "g": 255, "b": 255 }]


function start() {
    createFireDataStructure()
    createFireSource()
    renderFire()

    setInterval(calculatorFirePropagation, 50)

}

function createFireDataStructure() {
    const nQtdPixels = nFireWidth * nFireHeight
    for (let nI = 0; nI < nQtdPixels; nI++) {
        aFirePixels[nI] = 0
    }
}


function calculatorFirePropagation() {
    for (let nX = 0; nX < nFireWidth; nX++) {

        for (let nI = 0; nI < nFireHeight; nI++) {

            const nPixIdx = nX + (nI * nFireWidth)
            updateFireIntensityPerPixel(nPixIdx)

        }

    }
    renderFire()
}

function updateFireIntensityPerPixel(nPixIdx) {
    const nNxtPix = nPixIdx + nFireWidth
    if (nNxtPix >= nFireWidth * nFireHeight) {
        return
    }
    const nDecay = Math.floor(Math.random() * 3)
    const nNxtInt = aFirePixels[nNxtPix]
    // const nNewInt = nNxtInt - nDecay
    const nNewInt = nNxtInt - nDecay >= 0 ? nNxtInt - nDecay : 0

    aFirePixels[nPixIdx + nDecay] = nNewInt
}

function renderFire() {
    const lDebug = false
    let sHtml = '<table cellpadding=0 cellspacing=0>'

    for (let nI = 0; nI < nFireHeight; nI++) {
        sHtml += '<tr>'

        for (let nX = 0; nX < nFireWidth; nX++) {
            const nPixIdx = nX + (nI * nFireWidth)
            const nIntesi = aFirePixels[nPixIdx]

            if (lDebug === true) {
                sHtml += '<td>'
                sHtml += `<div class="pixind">${nPixIdx}</div>`
                sHtml += nIntesi
                sHtml += '</td>'

            } else {
                const nValCor = aLstCor[nIntesi]
                const cSelCor = `${nValCor.r},${nValCor.g},${nValCor.b}`
                sHtml += `<td class="pixel" style="background-color: rgb(${cSelCor})">`
                sHtml += '</td>'

            }


        }

        sHtml += '</tr>'
    }

    sHtml += '</table>'

    document.querySelector('#fireCanvas').innerHTML = sHtml

}

function createFireSource() {
    for (let nI = 0; nI <= nFireWidth; nI++) {
        const nOveFlw = nFireWidth * nFireHeight
        const nPixInd = (nOveFlw - nFireWidth) + nI

        aFirePixels[nPixInd] = 36
    }
}


start()

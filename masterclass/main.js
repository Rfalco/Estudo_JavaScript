/* ====== LISTA DE TAREFAS PARA DESENVOLVIMENTO ======
[]-GET ALL KEYS
[]-PLAY NOTES
[]-CLICK WITH MOUSE
[]-KEYBOARD TYPE
[]-
======================================================*/

const oLstKey = document.querySelectorAll('.key')

console.log(oLstKey)

function fPlayNote(oParm) {
    console.log(oParm)
    console.log(oParm.type)

    let oAudCod = fGetKeyCode(oParm)
}


function fGetKeyCode(oParm) {
    let oKeyCod = ""

    const lPressK = oParm.type === "keydown"
    if (lPressK) {
        oKeyCod = oParm.keyCode
    } else {
        oKeyCod = oParm.target.dataset.key
    }
}

oLstKey.forEach(function (oParm) {
    oParm.addEventListener("click", fPlayNote)
})

window.addEventListener("keydown", fPlayNote)
// ======================================================================
// **********  PARA EXECUTAR ESTE ARQUIVO DIRETO PELO VSCODE COM NODEJS
// **********************   CLIQUE EM F8 ------------ ( CRTL + ALT + N )
// ======================================================================
// https://www.youtube.com/watch?v=mc3TKp2XzhI&list=PLHz_AreHm4dlsK3Nr9GVvXCbpQyHQl1o1&index=30&ab_channel=CursoemV%C3%ADdeo
// ======================================================================

function fParImp(nValPar) {
    if ((nValPar % 2) == 0) {
        return 'Par';
    } else {
        return 'Impar';
    }
}


function fSoma(nI = 0, nX = 0) {
    return (nI + nX);
}


let cRes = function (x) {
    return (x * 2);
}


function fFatorial(nI) {
    /// 5! = 5 x 4 x 3 x 2 x 1 = 120
    let nFat = 1
    for (let nX = nI; nX > 1; nX--) {
        nFat *= nX;
    }
    return nFat;
}

/// RECURSIVIDADE
function fFatRec(nI) {
    if (nI == 1) {
        return nI;
    } else {
        return nI * (fFatRec(nI - 1));
    }
}

console.log(fParImp(255));

console.log(fSoma(7));

console.log(cRes(5));

console.log(fFatorial(5));

console.log(fFatRec(5));
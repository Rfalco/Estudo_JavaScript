// ======================================================================
// **********  PARA EXECUTAR ESTE ARQUIVO DIRETO PELO VSCODE COM NODEJS
// **********************   CLIQUE EM ( CRTL + ALT + N )  
// ======================================================================
// ======================================================================

let nI = 0
let aNum = [5, 8, 9, 3]

console.log(`Vetor criado possui os itens: ${aNum}`)
console.log(aNum)

aNum[1] = 2
console.log(`O item do indice [1] foi alterado: ${aNum}`)

aNum.push(6)
console.log(`Foi incluído um novo item no final: ${aNum}`)

console.log(`A quantidade de itens no vetor é ${aNum.length}`)

while (nI < aNum.length) {
    console.log(`O indice ${nI} possui o valor: ${aNum[nI]}`)
    nI++
}

console.log(`Ordenando o vetor: ${aNum.sort()}`)

for (let nI = 0; nI < aNum.length; nI++) {
    console.log(`O indice ${nI} possui o valor: ${aNum[nI]}`)
}
console.log("")
aNum.push(7)
aNum.push(1)

for (const nI in aNum) {
    console.log(`O indice ${nI} possui o valor: ${aNum[nI]}`)
}

console.log("")

let nVal = 4
let nPos = aNum.indexOf(nVal)
if (nPos >= 0) {
    console.log(`A posição do valor ${nVal} está na posição: ${nPos}`)
} else {
    console.log(`O valor ${nVal} não existe no vetor.`)
}
console.log("")



var stringArray = ['Blue', 'Humpback', 'Beluga'];
var numericStringArray = ['80', '9', '700'];
var numberArray = [40, 1, 5, 200];
var mixedNumericArray = ['80', '9', '700', 40, 1, 5, 200];

function compararNumeros(a, b) {
    return a - b;
}

console.log('stringArray:', stringArray.join());
console.log('Ordenada:', stringArray.sort());

console.log('numberArray:', numberArray.join());
console.log('Ordenada sem função de comparação:', numberArray.sort());
console.log('Ordenada com compararNumeros:', numberArray.sort((a, b) => a - b));

console.log('numericStringArray:', numericStringArray.join());
console.log('Ordenada sem função de comparação:', numericStringArray.sort());
console.log('Ordenada com compararNumeros:', numericStringArray.sort(compararNumeros));

console.log('mixedNumericArray:', mixedNumericArray.join());
console.log('Ordenada sem função de comparação:', mixedNumericArray.sort());
console.log('Ordenada com compararNumeros:', mixedNumericArray.sort(compararNumeros));

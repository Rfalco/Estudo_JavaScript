
// ======================================================================
// **********  PARA EXECUTAR ESTE ARQUIVO DIRETO PELO VSCODE COM NODEJS
// **********************   CLIQUE EM ( CRTL + ALT + N )  
// ======================================================================
// ======================================================================

var idade = 66
console.log(`Você tem ${idade} anos, então:`)
if (idade < 16) {
   console.log('Não vota.')
} else if (idade < 18 || idade > 65) {
   console.log('Voto Opcional')
} else {
   console.log('Voto obrigatório.')
}


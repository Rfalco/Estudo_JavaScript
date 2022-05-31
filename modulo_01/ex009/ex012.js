
// ======================================================================
// **********  PARA EXECUTAR ESTE ARQUIVO DIRETO PELO VSCODE COM NODEJS
// **********************   CLIQUE EM ( CRTL + ALT + N )  
// ======================================================================
// ======================================================================

var sDatAtu = new Date
var sHraAtu = sDatAtu.getHours()
console.log(`Agora são exatamente ${sHraAtu} horas`)

if (sHraAtu <= 5){
   console.log(`Boa Madrugada!`)
} else if (sHraAtu <= 12) {
   console.log(`Bom Dia!`)
} else if (sHraAtu <= 18){
   console.log(`Boa Tarde!`)
} else if (sHraAtu < 24){
   console.log(`Boa Noite!`)
}



var fruits = ["Apple", "Banana", "Orange"];
for (x of fruits) {
  console.log(x);
}

// ======================================================================
// **********  PARA EXECUTAR ESTE ARQUIVO DIRETO PELO VSCODE COM NODEJS
// **********************   CLIQUE EM ( CRTL + ALT + N )  
// ======================================================================
// ======================================================================

var aTabDia = ['0=Domingo', '1=Segunda', '2=Terça', '3=Quarta', '4=Quinta', '5=Sexta', '6=Sábado']
var sDatAtu = new Date()
var sDiaSem = sDatAtu.getDay()
for (x of aTabDia) {
   console.log(x)
}
console.log('--------------------------------------')
switch (sDiaSem) {
   case 0:
      console.log(`Dia da semana é ${aTabDia[0]}`)
      break;

   case 1:
      console.log(`Dia da semana é ${aTabDia[1]}`)
      break;

   case 2:
      console.log(`Dia da semana é ${aTabDia[2]}`)
      break;

   case 3:
      console.log(`Dia da semana é ${aTabDia[3]}`)
      break;

   case 4:
      console.log(`Dia da semana é ${aTabDia[4]}`)
      break;

   case 5:
      console.log(`Dia da semana é ${aTabDia[5]}`)
      break;

   case 6:
      console.log(`Dia da semana é ${aTabDia[6]}`)
      break;

   default:
      console.log('Dia da semana não informado!')
      break;
}
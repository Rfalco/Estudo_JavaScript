// ======================================================================
// **********  PARA EXECUTAR ESTE ARQUIVO DIRETO PELO VSCODE COM NODEJS
// **********************   CLIQUE EM F8 ------------ ( CRTL + ALT + N )
// ======================================================================
// https://www.youtube.com/watch?v=roP93FA-NgU&list=PLHz_AreHm4dlsK3Nr9GVvXCbpQyHQl1o1&index=33&ab_channel=CursoemV%C3%ADdeo
// ======================================================================


let amigo = {
    nome: 'José',
    sexo: 'M',
    peso: 85.4,
    engordar(p = 0) {
        console.log('Engordou!')
        this.peso += p
    }
}


console.log(amigo)

amigo.engordar(2)
console.log(`${amigo.nome} pesa ${amigo.peso}Kg`)

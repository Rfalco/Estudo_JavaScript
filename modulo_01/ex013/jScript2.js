function fTabuada() {
   

   let oTabNum = document.querySelector('#sNumtab')
   let nValTab = document.querySelector('#sNumtab').value

   if (nValTab == '') {
      window.alert('Nenhum Valor foi informado!')

   } else {

      sTabSel.innerHTML = `<p>Tabuada do <strong>${nValTab}</strong></p>`
      sResult.innerHTML = `<p>`

      for (let nI = 0; nI <= 10; nI++) {
         let nRes = nValTab * nI
         sResult.innerHTML += `${nValTab}<strong> x </strong>${nI}<strong> = </strong> ${nRes}<br>`
      }
      sResult.innerHTML += `</p>`
   }

}
function fContador() {

   let oParIni = document.querySelector('#cParIni')
   let oParFim = document.querySelector('#cParFim')
   let oParPas = document.querySelector('#cParPas')
   let oTitCnt = document.querySelector('#cTitCnt')
   let oParCnt = document.querySelector('#cContar')

   let nValIni = Number(oParIni.value)
   let nValFim = Number(oParFim.value)
   let nValPas = Number(oParPas.value)
   let cSaiCon = ''

   if (!(nValIni > 0)) {
      window.alert('[INI] - Nenhum valor foi informado no campo [INÍCIO]')
      document.getElementById('cParIni').focus()
   } else if (!(nValFim > nValIni)) {
      window.alert('[FIM] - Valor deve ser maior que o início.')
      document.getElementById('cParFim').focus()
   } else if (!(nValPas > 0)) {
      window.alert('[PAS] - Nenhum valor foi informado no campo [PASSO]')
      document.getElementById('cParPas').focus()
   } else {

      oTitCnt.innerHTML = 'contando....'
      for (let nI = nValIni; nI < nValFim; nI += nValPas) {

         cSaiCon += nI.toString() + ' ' + '&#x1F449' + ' '
         oParCnt.innerHTML = cSaiCon
      }

      oParCnt.innerHTML = cSaiCon + ' ' + '&#x1F3C1'
   }

}
function fVerif_1() {

   let nIdade_ = 0
   let sSexInf = ''
   let sDtaAtu = new Date()
   let sAnoAtu = sDtaAtu.getFullYear()
   let sAnoInf = document.querySelector('#AnoInf')

   let oImgInf = document.querySelector('#ImgInf')
   let oMsgInf = document.querySelector('#MsgInf')
   let oInfSex = document.querySelectorAll("input[name='sInfSex']:checked")
   let nAnoAtu = Number(sAnoAtu)
   let nAnoInf = Number(sAnoInf.value)

   if ((sAnoInf.value) == '') {
      window.alert('Ano não foi informado preencha o campo ANO.')
      oImgInf.innerHTML = ''
      oMsgInf.innerHTML = 'Preencha os dados acima para ver o resultado!'
   } else if (sAnoInf.value >= sAnoAtu) {
      window.alert('Ano informado não pode ser maior ou igual ao ano atual.')
      oImgInf.innerHTML = ''
      oMsgInf.innerHTML = 'Preencha os dados acima para ver o resultado!'
   } else {

      if (oInfSex.length === 1) {
         sSexInf = oInfSex[0].value
         nIdade_ = nAnoAtu - nAnoInf

         if (sSexInf == 'FEM') {
            if (nIdade_ <= 10) {
               oImgInf.innerHTML = '<img src="../../storage_images/fases_F_crianca_0.png" alt="">'
            } else if (nIdade_ <= 25) {
               oImgInf.innerHTML = '<img src="../../storage_images/fases_F_jovem_0.png" alt="">'
            } else if (nIdade_ <= 50) {
               oImgInf.innerHTML = '<img src="../../storage_images/fases_F_adulto_0.png" alt="">'
            } else {
               oImgInf.innerHTML = '<img src="../../storage_images/fases_F_idoso_0.png" alt="">'
            }
            oMsgInf.innerHTML = `Detectamos uma pessoa do sexo feminino de ${nIdade_} anos de idade`
         } else if (sSexInf == 'MAS') {
            if (nIdade_ <= 10) {
               oImgInf.innerHTML = '<img src="../../storage_images/fases_M_crianca_0.png" alt="">'
            } else if (nIdade_ <= 25) {
               oImgInf.innerHTML = '<img src="../../storage_images/fases_M_jovem_0.png" alt="">'
            } else if (nIdade_ <= 50) {
               oImgInf.innerHTML = '<img src="../../storage_images/fases_M_adulto_0.png" alt="">'
            } else {
               oImgInf.innerHTML = '<img src="../../storage_images/fases_M_idoso_0.png" alt="">'
            }
            oMsgInf.innerHTML = `Detectamos uma pessoa do sexo masculino de ${nIdade_} anos de idade`
         }
      } else {
         window.alert('Não foi selecionado qual o SEXO!')
         oImgInf.innerHTML = ''
         oMsgInf.innerHTML = 'Preencha os dados acima para ver o resultado!'
      }

   }

}
/*
function fVerif_2() {

   let sDtaAtu = new Date()
   let sAnoAtu = sDtaAtu.getFullYear()
   let oAnoInf = document.querySelector('#AnoInf')
   let oImgInf = document.getElementById('ImgInf')
   let oMsgInf = document.getElementById('MsgInf')
   let sInfSex = document.getElementsByName('sInfSex')
   let oImgNew = document.createElement('img')
   if (oAnoInf.value.length == 0) {

      oMsgInf.style.color = '#6d0303'
      oMsgInf.style.fontWeight = 'bold'
      oMsgInf.innerHTML = `O campo Ano não foi informado!`

      oImgNew.setAttribute('id', 'ImgAtu')
      oImgNew.setAttribute('src', '../../storage_images/ico_atencao.png')
      oImgInf.appendChild(oImgNew)

   } else if (oAnoInf.value >= sAnoAtu) {

      oMsgInf.style.color = '#6d0303'
      oMsgInf.style.fontWeight = 'bold'
      oMsgInf.innerHTML = `Ano informado ${oAnoInf.value} não pode ser maior ou igual ao ano atual ${sAnoAtu}!`

      oImgNew.setAttribute('id', 'ImgAtu')
      oImgNew.setAttribute('src', '../../storage_images/ico_atencao.png')
      oImgInf.appendChild(oImgNew)

   } else {

      /*
            if (sInfSex[0].checked) {
         } else {
      
         }
      *//*



   }



}
*/
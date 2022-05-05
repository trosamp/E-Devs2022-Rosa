///const fname = 'aoContrário'
///const tamanho = fname.length
///var resultado = ''

///for (index = tamanho; index > -1; index--){
///    resultado += fname.charAt(index)
///    console.log(resultado)
///}

function troca(qqcoisa){
    const tamanho = qqcoisa.length;
    let result = '';
    for (index = tamanho -1; index > -1; index --){
        result += qqcoisa[index]
    }
    console.log(`A palavra digitada  foi ${qqcoisa} e ao contrário fica ${result}.`)
}
troca('Thiago')


//function inverter(textoQualquer) {
//    const tamanhoDoTextoQualquer = textoQualquer.length
//    let resultado = ""
//    for (var index = tamanhoDoTextoQualquer - 1; index >= 0; index--) {
//      resultado += textoQualquer[index]
//    }
//    console.log(resultado)
//  }
//  inverter('Pablo')

//***

//  function inverter(textoQualquer) {
//    let resultado = '';
//    for (let letra of textoQualquer) {
//      resultado = letra + resultado;
//    }
//    console.log(resultado);
//  }
//  
//  inverter('pablo');
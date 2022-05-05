//const palavra = 'TESTE'
//const tamanho = palavra.length
//var vogais = 0

//for (index = 0; index < tamanho; index++){
//   var letra = palavra.charAt(index).toLocaleLowerCase(index)
//   if(letra == 'a' || letra == 'e' || letra == 'i' || letra == 'o' || letra == 'u'){
//        vogais ++
//    }
//}
//console.log('A palavra digitada foi ' + palavra + ' e tem ' + vogais + ' vogais.')

//function contar(qqcoisa){
//    const tamanho = qqcoisa.lenght;
//    let vogais = 0;
//    for (let index = 0; index <= tamanho; index++){
//        const letra = qqcoisa.charAt(index)
//        if (letra == 'a' || letra == 'e' || letra == 'i' || letra == 'o' || letra == 'u'){
//            vogais++
//        console.log('to aqui')
//        }
//    console.log('oi')
//    }
//    console.log(vogais)
//}
//contar('Thiago')


function contar(qqcoisa){
    let resultado = 0;
    for (let letra of qqcoisa){
        if (letra == 'a' || letra == 'e' || letra == 'i' || letra == 'o' || letra == 'u' || letra == 'A' || letra == 'E' || letra == 'I' || letra == 'O' || letra == 'U')
            resultado ++;
    }
    console.log(`A palavra digitada foi ${qqcoisa} e ela tem ${resultado} vogais.`)
}
contar('THIAGO')





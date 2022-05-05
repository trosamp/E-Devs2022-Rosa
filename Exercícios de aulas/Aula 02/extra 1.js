function fazerRelatorio (qqcoisa){
    const tamanho = qqcoisa.lenght;
    let resultAoCont = '';
    let addletras = '';
    let resultVogais = 0;
    for (let letra of qqcoisa){
        if (letra == 'a' || letra == 'e' || letra == 'i' || letra == 'o' || letra == 'u'   || letra == 'A' || letra == 'E' || letra == 'I' || letra == 'O' || letra == 'U'){
            resultVogais ++;
        }if(letra == 'a' || letra == 'e' || letra == 'i' || letra == 'o' || letra == 'u'   || letra == 'A' || letra == 'E' || letra == 'I' || letra == 'O' || letra == 'U'){
            addletras = addletras + letra
        }
    }
    for (let letra of qqcoisa){
        resultAoCont = letra + resultAoCont
    }
    console.log(`A palavra escrita foi ${qqcoisa} e ao contrário fica assim ${resultAoCont}.`)
    console.log(`Ela tem ${resultVogais} vogais, que são: ${addletras}.`)
}

fazerRelatorio('Amor a Roma')
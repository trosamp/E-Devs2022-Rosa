function contar(qqcoisa){
    let resultado = 0;
    for (let letra of qqcoisa){
        if (letra == 'a' || letra == 'e' || letra == 'i' || letra == 'o' || letra == 'u' || letra == 'A' || letra == 'E' || letra == 'I' || letra == 'O' || letra == 'U')
            resultado ++;
    }
    console.log(`A palavra digitada foi ${qqcoisa} e ela tem ${resultado} vogais.`)
}
contar('BANANA')





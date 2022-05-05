function troca(qqcoisa){
    const tamanho = qqcoisa.length;
    let result = '';
    for (index = tamanho -1; index > -1; index --){
        result += qqcoisa[index]
    }
    console.log(`A palavra digitada foi ${qqcoisa} e ao contrário fica ${result}.`)
}
troca('Amor a Roma')
const nome = 'Thiago'
const sal = 2850

console.log (nome + ' recebe R$ ' + sal)

const aum = sal * 1.18

if (aum >= 3000){
    console.log ('Com o aumento de 18% ' + nome + ' passará a receber R$' + aum + ' então precisará declarar imposto.')
}else{
    console.log ('Com o aumento de 18% ' + nome + ' passará a receber R$ ' + aum + ' então não precisará declarar imposto.')
}
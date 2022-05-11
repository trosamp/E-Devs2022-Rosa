const informacoes = [
    {nome: 'Thiago', idade: 30},
    {nome: 'Bianka', idade: 27}
]

const media = [
    {aluno: 'Thiago', notas: [80, 70, 90]},
    {aluno: 'Bianka', notas: [75, 85, 95]}
]
for (notas in media){
    console.log(media.notas)
}

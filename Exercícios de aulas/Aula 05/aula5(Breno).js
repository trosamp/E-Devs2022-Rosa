// METODOS ARRAY

const alunos = ['Breno', 'Joao', 'Danilo', 'Felipe', 'Jey', 'Alan'];

// - push -> adiciona um item no final do array
alunos.push('Lucas');
// console.log(alunos) // ['Breno', 'Joao', 'Lucas'];

// - pop 
const alunoRemovido = alunos.pop();
// console.log(alunoRemovido, alunos);

// DIFERENCA ENTRE PROPRIEDADES E METODOS
// -> length x metodos
// console.log(alunos, alunos.length);

// METODOS DE LOOP

// -> forEach -> percorre o array
const naoAprovados = [];

function verificarNota (aluno, index) {
  // console.log(aluno, index);
  if (index > 2) {
    naoAprovados.push(aluno);
  }
}
alunos.forEach(verificarNota);
// console.log(naoAprovados)

// -> map - transforma o array;
const alunosConcorrentes = [
  { nome: 'Elisa', nota: 8 },
  { nome: 'Thiago', nota: 6 },
  { nome: 'Fausto', nota: 6 },
  { nome: 'Alana', nota: 9 },
  { nome: 'Cauan', nota: 6 },
]

function gerarParticipante(objAluno, index) { // { nome: 'Elisa', nota: 8 }
  let mensagem;
  let aprovado;

  if (objAluno.nota < 7) {
    mensagem = `${objAluno.nome} não foi dessa vez :( Sua nota foi ${objAluno.nota}`;
    aprovado = false;
  } else {
    mensagem = `${objAluno.nome} parabens, você foi aprovado! Sua nota foi ${objAluno.nota}`;
    aprovado = true;
  }

  return {
    nome: objAluno.nome,
    nota: objAluno.nota,
    mensagem,
    aprovado: aprovado,
  }
}

const participantes = alunosConcorrentes.map(gerarParticipante);
// console.log(participantes);

// -> filter

// exemplo 1 - filtro de transacoes
const transacoes = [
  { valor: 150, tipo: 'saque'},
  { valor: 100, tipo: 'deposito'},
  { valor: 200, tipo: 'saque'},
  { valor: 300, tipo: 'deposito'},
  { valor: 220, tipo: 'saque'},
  { valor: 340, tipo: 'deposito'},
];

const saques = transacoes.filter((transacao) => {
  return transacao.tipo === 'saque'; // true
});
// console.log(saques);

let valorTotalSaques = 0;
saques.forEach(saque => {
  valorTotalSaques = valorTotalSaques + saque.valor;
  // console.log(valorTotalSaques);
})
// console.log('total final:', valorTotalSaques);

function checarNota (nota) {
  return nota < 7;
}

// exemplo 2 - filtro por alunos aprovados
const alunosAprovados = participantes.filter(item => checarNota(item.nota));
// console.log(alunosAprovados)


// desestruturacao
function gerarParticipante2(objAluno, index) { // { nome: 'Elisa', nota: 8 }
  // const nome = objAluno.nome; // forma arcaica
  const { nome, nota } = objAluno; // forma moderna usando desetruturação
  let mensagem;
  let aprovado;

  if (nota < 7) {
    mensagem = `${nome} não foi dessa vez :( Sua nota foi ${nota}`;
    aprovado = false;
  } else {
    mensagem = `${nome} parabens, você foi aprovado! Sua nota foi ${nota}`;
    aprovado = true;
  }

  return {
    nome,
    nota,
    mensagem,
    aprovado: aprovado,
  }
}

// rest e spread (rest quando junta // spread quando espalha)

// exemplos spread
const bebidas = ['suco de laranja', 'agua', 'refri'];
const lanches = ['hamburguer', 'pizza'];
const sobremesas = ['brigadeiro', 'pudim', 'sorvete'];
const menu = [...bebidas, ...lanches, ...sobremesas];
// console.log(menu);

const alunosBackend = ['Alan'];
const alunosFrontend = ['Breno'];
const alunosDevs = [...alunosBackend, ...alunosFrontend];
// console.log(alunosDevs);

const alunoFront = { nome: 'Joao', nota: 9 };
const alunoFrontCompleto = { ...alunoFront, idade: 19, dataNascimento: '10/10/2002' };
// console.log(alunoFrontCompleto);


// exemplos rest
const { dataNascimento, ...outrosDados } = alunoFrontCompleto;
// console.log(outrosDados);

function somar(...numeros) {
  let valorTotal = 0;
  numeros.forEach(n => {
    valorTotal = valorTotal + n;
  })
  return valorTotal
}

const result = somar(2, 3, 6, 2, 3, 6, 2, 3, 6, 2, 3, 6, 2, 3, 6);
// somar([2, 3, 6, 8, 10, 2]);
// console.log(result);


const alunosArray = [
  { nome: 'Joao', notas: [10, 8, 10, 8]}
];

[
  { nome: 'Joao', notas: [10, 8, 10, 8], media: 9 },
  { nome: 'Elisa', notas: [10, 8, 10, 8], media: 9 }
]


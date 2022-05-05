const pessoas = [
    { nome: 'Vitor', idade: 30 },
    { nome: 'Joao', idade: 19 },
    { nome: 'Pedro', idade: 18 },
    { nome: 'Elisa', idade: 32 },
    { nome: 'Elisa', idade: 32 },
    { nome: 'Elisa', idade: 32 },
    { nome: 'Elisa', idade: 32 },
    { nome: 'Elisa', idade: 32 },
  ];
  
  const tamanhoDaLista = pessoas.length;
  
  for (let index = 0; index < tamanhoDaLista; index++) {
    const nome = pessoas[index].nome;
    console.log(nome);
  }
  

# [🏠](./README.md) - [Componentes](./componentes.md) - Renerizar Arrays

## Renderizar Arrays

Muitas vezes vai ser necessario renderizar um componente atraves de uma coleção de dados (Arrays [], Array's de Objetos[{}]) e não de dados simples (objetos). Em Javascrit utilizamos arrays para armazenar conjuntos de dados e temos os metodos dos Array's disponiveis para manipular e apresentar esses dados.

[Array's MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array)

Em React utilizaremos principalmente os metodos filter() e map() para manipular esses mesmos dados e renderizar só os elementos filtrados que precisamos ou mapear a nossa informação para os componentes de React.

_Como funciona:_  
Vamos imaginar que queremos fazer criar uma lista de perfis de programadores.
A nossa lista vai apresentar o nome e a linguagem em que programa. Queremos fazer isto numa listagem

```HTML
<!-- HTML final que queremos renderizar -->
<ul>
  <li>Jõao: JAVA</li>
  <li>Mario José: C#</li>
  <li>C. Ronaldo: Linic</li>
  <li>Maia: Javascript</li>
  <li>Chico: Cobol</li>
</ul>
```

Como podemos ver acima descrito existe um elemento que se repete e que só altera o seu conteudo as `<li></li>`.  
Este é um exemplo de algo que acontece inumeras vezes ao longo da nossa vida como desenvolvedor. Muitas vezes iremos ter estruturas iguas para apresentar algo onde só se altera o conteudo ex: Listagens de texto, Galeria de imagens, Comentarios em posts, Cards de produtos, etc.

Esta informação pode ser armazena da em objetos ou arrays para mais tarde ser utilizada com recurso as funções de `filter` e `map`.

Mas primeiro vamos passar a informação descrita no HTML para um array:

```JSX
// Array de candidatos
const candidatos = [
  "Jõao: JAVA",
  "Mario José: C#",
  "C. Ronaldo: Linic",
  "Maia: Javascript",
  "Chico: Cobol"
]

// Vamos mapear os candidatos para um novo array de nodes JSX
const listaCandidatos = candidatos.map(candidato => {
  return <li>{candidato}</li>
})

// A nossa constante listaCandidatos neste momento tem armazenados um conjunto de elementos JSX do tipo li.

// Para renderizar o nossa lista dentro do Componente principal so temos de carregar esta constante para o elemento

// Todo junto fica assim:
const ListaCandidatos = () => {

  const candidatos = [
    "Jõao: JAVA",
    "Mario José: C#",
    "C. Ronaldo: Linic",
    "Maia: Javascript",
    "Chico: Cobol"
  ]

  const listaCandidatos = candidatos.map(candidato => {
    return <li>{candidato}</li>
  })

  return <ul>{listaCandidatos}</ul>
}
```

[Exemplo em Codesandbox](https://codesandbox.io/s/react-playground-forked-33sxtv?file=/index.js)

Se tentarem correr este codigo e analisarem a consola vão reparar que existe o seguinte erro:

```console
Warning: Each child in a list should have a unique “key” prop.
```

Este erro é normal com o código que desevolvemos e vamos resolver nos passos seguintes, mas primeiro vamos restruturar o nosso array de candidatos de forma a separar a informação do nome e da linguagem.

```JSX
 //Array [] de Objetos {}
  const candidatos = [
    {
      id: 0,
      nome: "Jõao",
      linguagem: "JAVA"
    }, {
      id: 1,
      nome: "Mario José",
      linguagem: "C#"
    }, {
      id: 2,
      nome: "C. Ronaldo",
      linguagem: "Linic"
    }, {
      id: 3,
      nome: "Maia",
      linguagem: "Javascript"
    }, {
      id: 4,
      nome: "Chico",
      linguagem: "Cobol"
    }
  ]
```

Basicamente o que fizemos nesta nova estrutura é criarmos um conjunto de dados estruturados onde para cada elemento do array temos um conjunto de dados associados ou seja para o candidato na posição 0, podemos saber os dados como o nome a linguagem e o seu ID (identificador unico).

Desta forma podemos mapear os nossos candidatos e utilizar o mesmo exemplo da seguinte forma:

```JSX
const ListaCandidatos = () => {

  const candidatos = [
    { id: 0, nome: "Jõao", linguagem: "JAVA"},
    { id: 1, nome: "Mario José", linguagem: "C#"},
    { id: 2,  nome: "C. Ronaldo", linguagem: "Linic"},
    { id: 3, nome: "Maia", linguagem: "Javascript" },
    { id: 4, nome: "Chico", linguagem: "Cobol"}
  ]

  const listaCandidatos = candidatos.map(candidato => {
    return <li>{candidato.nome} {candidato.linguagem}</li>
  })

  return <ul>{listaCandidatos}</ul>
}
```

### Key Props

No exeplo anterior se analisarmos a consola podemos ver o existe um erro que diz o seguinte:

```console
Warning: Each child in a list should have a unique “key” prop.
```

Mas porque surge este erro? E o que significa?

Basicamente em React todos os elementos de uma listagem gerados devem possuir uma chave unica (key).

Mas porque?

Como falado anteriormente sabemos que em React não estamos a trabalhar sobre a DOM (Document Object Model) existente nos browsers mas sim numa DOM Virtual a que denominamos de VDOM (Virtual DOM) que não é mais do que uma representação JS da DOM que queremos representar e so atualizamos elementos no DOM se algum elemento for modificado. Ora numa listagem de elementos JSX o que acontece é que os elementos que são renderizados é o mesmo varias vezes desta forma no momento de atualizar a informação caso seja necessaria nunca conseguiriamos saber qual elemento que queremos atualizar porque são todos o mesmo "elemento".  
Desta forma foi necessario criar algum sistema que nos permita identificar estes elementos e foi assim que surge a necessidade de ser criada uma propriedade `key`.

O que é a prop `key`?

A propriedade key basicamente é uma propriedade onde temos de passar um valor unico e não partilhado que irá identificar esse elemento JSX. Desta forma conseguimos identificar o elemento correspondente e atualizar este componente sem termos a necessidade de renderizar o resto dos elementos da listagem.

Ou seja o valor key deve ser um valor sempre unico e que identifique o elemento sem poder ser confundido com outro.

No exemplo acima descrito temos nos dados um valor unico é uma chave unica e que pode ser utilizado como key no nosso elemento, falamos do valor do `id` que é o identificador unico para cada pessoa.

```JSX
const listaCandidatos = candidatos.map(candidato => {
  return (
    <li key={candidato.id}>
      {candidato.nome} {candidato.linguagem}
    </li>
  )
  })
```

Todo junto:

```JSX
const ListaCandidatos = () => {

  const candidatos = [
    { id: 0, nome: "Jõao", linguagem: "JAVA"},
    { id: 1, nome: "Mario José", linguagem: "C#"},
    { id: 2,  nome: "C. Ronaldo", linguagem: "Linic"},
    { id: 3, nome: "Maia", linguagem: "Javascript" },
    { id: 4, nome: "Chico", linguagem: "Cobol"}
  ]

  const listaCandidatos = candidatos.map(candidato => {
    return (
      <li key={candidato.id}>
        {candidato.nome} {candidato.linguagem}
      </li>)
  })

  return <ul>{listaCandidatos}</ul>
}
```

[Exemplo em CodeSandbox](https://codesandbox.io/s/react-playground-forked-4wte0f?file=/index.js)

### Filtrar Array's

Vamos ver como filtrar elementos de arrays para mais tarde serem apresentados na listagem.
Vamos reutilizar o mesmo objeto mas desta vez queremos filtrar candidatos que so programem em "Javascript".

Para conseguirmos fazer isto vamos utilizar a metodo `filter()` dos arrays de JS.

[Array.Filter() MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter)

```JSX
  const candidatos = [
    { id: 0, nome: "Jõao", linguagem: "JAVA"},
    { id: 1, nome: "Mario José", linguagem: "C#"},
    { id: 2,  nome: "C. Ronaldo", linguagem: "Linic"},
    { id: 3, nome: "Maia", linguagem: "Javascript" },
    { id: 4, nome: "Chico", linguagem: "Cobol"}
  ]


const programadoresJS = candidatos.filter(candidato => candidato.linguagem === "Javascript")

const listaCandidatos = programadoresJS.map(candidato => {
    return (
      <li key={candidato.id}>
        {candidato.nome} {candidato.linguagem}
      </li>)
  })
```

[Exemplo CodeSandbox](https://codesandbox.io/s/upbeat-star-7mf2i2?file=/src/App.js)

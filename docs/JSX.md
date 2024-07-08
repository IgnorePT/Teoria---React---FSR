# [🏠](./README.md) - JSX

## O que é JSX?

É uma extensão de sintaxe para Javscript. É utilizado em react para descrever como a nossa UI deveria ser representada.

Apesar de apresentar um estilo semelhante a uma linguagem de markdown (estrutura/template) ela possui todas as funcionalidades e beneficios do JS.

### Exemplo

```jsx
const ui = <h1> Titulo </h1>;
```

Como podemos ver a estrutura de um elementos simples asemelha-se bastante a estrutura de HTML. O que o torna muito facil de se perceber por qualquer pessoa com conhecimentos de HTML

Contudo esta representação apesar de parecer muito semelhante não significa que seja a mesma coisa. JSX não é efetivamente Javascript o que ele produz são react "elements" e temos a necessidade de converter este codigo em Javascript com recurso a um "code compiler" neste caso utilizamos o Babel

```jsx
const ui = <h1 id="mensagem">Olá Edit</h1>;

// É compilado para ↓

const ui = React.createElement("h1", { id: "mensagem", children: "Olá Edit" });
```

[Link para Babel](https://babeljs.io/repl#?browsers=defaults%2C%20not%20ie%2011%2C%20not%20ie_mob%2011&build=&builtIns=App&corejs=3.21&spec=false&loose=false&code_lz=MYewdgzgLgBArgSxgXhgHgCYIG42AGwEMIIA5QgWwFNkAiUMKQhMKgJ1oD40IAHQsJwDyRNAHo-AzukmCAolijjZ3MVmycAUEA&debug=false&forceAllTransforms=false&shippedProposals=false&circleciRepo=&evaluate=false&fileSize=false&timeTravel=false&sourceType=module&lineWrap=true&presets=react&prettier=true&targets=&version=7.20.4&externalPlugins=&assumptions=%7B%7D)

## Escrever em Blocos

Muitas vezes os nossos componentes podem ser criados utilizando uma unica linha de codigo e é p sufuciente para criar uma representação do nosso componente, contudo muitas vezes pode ser necessario criar componentes mais complexos onde a representação numa linha unica de codigo se torne perjudicial a leitura do componente.  
Para renderizarmos componentes em mais de uma linha de codigo o unico que sera necessario fazer englobarmos esse componente entre `( ... codigo do componente ... )`

```JSX

const customBlock = (
    <div className="card">
        <h2>Nome de Produto</h2>
        <p>Decrição de produto</p>
        <div>
            <span className="main-price">Preço de produto</span>
            <span className="discount-price">Preço de produto</span>
        </div>
        <button>Comprar</button>
    </div>
)
```

## Diferenças entre JSX e HTML

Existem algumas diferenças importantes no que toca a escrevermos HTML & JSX, apesar de serem incrivelmente semelhantes existem algumas diferenças importantes a terem em atenção.

### Single Parent

Uma das maiores diferneças entre o HTML e JSX é que em JSX necessitamos sempre de criar um unico elemento pai, ou este componente não será compilado.

```jsx
// Este codigo não será compilado
const ui = (
    <div>Div 1</div>
    <div>Div 2</div>
)

// Codigo será compilado

const ui = (
    <div>
        <div>Div 1</div>
        <div>Div 2</div>
    </div>
)
```

Mas como faço para criar elementos sem poluir os componentes com div's ou outro elemento.  
Existe um elemento especifico em React que não possui representação este elemento é o `React Fragment` que é um elemento valido mas que não será representado em HTML

```jsx
//Existem 2 formas de utilizar este elemento React.fragment
const ui = (
	<React.fragment>
		<div>Div 1</div>
		<div>Div 2</div>
	</React.fragment>
);

// ou <></>
const ui = (
	<>
		<div>Div 1</div>
		<div>Div 2</div>
	</>
);
```

### Palavras reservadas

Como JSX é uma extensão de sintaxe do react esta é escrito em um ambiente de JS puro, ou seja temos que ter em atenção que em JS assim como noutras linguagens existem um conjunto de palavras reservadas que não podem ser utilizadas neste ambiente.

### ⚠️ class & className

A palavra `class` é neste momento uma palavra reservada em JS logo não é possivel utilizarmos esta palavra quando queremos definir uma classe HTML sendo assim `class="container"` terá de ser substituido por `className="container"`.

```html
<!-- EM HTML -->
<div class="container"></div>
```

```jsx
//JSX
const divElement = <div className="container">

```

### ⚠️ for

A palavra `for` tambem é uma palavra reservada especificamente para ciclos logo tambem não é possivel ser utilizada em JSX. No caso o for é utilizado em HTML no elemento `label` para definir ao input a que se refere neste caso `for="name"` terá de ser subsitituido por `htmlfor="name"`

```html
<!-- EM HTML -->
<label for="name"
	>Name
	<input id="name" />
</label>
```

```jsx
//JSX
const divElement = <label htmlfor="name">Name <input id="name"></label>
```

### JS

Como mencionamos anteriormente um dos maiores beneficios de utilizarmos JSX é a capacidade de podermos utilizar JS puro dentro dos componentes criados com recurso a JSX.

### Mas como utilizamos JS em JSX

É facil simplesmente colocamos qualquer expressão valida de JS que quisermos utilizar entre `{ ...expressão JS...}`

```jsx
//Variaveis
const title = "Melhor titulo do mundo";

const element = (
	<div>
		<h1>{title}</h1>
	</div>
);

//Ternarios
const element = (
	<div>
		<h1>{title != "" ? title : "Titulo de fallback"}</h1>
	</div>
);
```

Existe uma infinidades de possibilidades estes exemplos são os mais usados contudo qualquer expressão JS valida pode ser utilizada. `(ex: if, for, map, filters)`

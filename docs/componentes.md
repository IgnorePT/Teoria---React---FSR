# [🏠](./README.md) - Componentes

### Indice:

1. [O que são componentes?](#o-que-são-componentes)
1. [Arquitectura](#arquitectura)
1. [Props (Propriedades)](#props)
1. [Receita](#receita)

# Componentes

Sendo React uma biblioteca de front-end baseada em componentes significa que todas as parte da nossa aplicação são pequenos componentes divididos por diversos ficheiros.

## O que são componentes?

Componentes em React não são nada mais pequenos pedaços da nossa interface grafica.  
Toda aplicação em react é uma arvore de componentes, que nos permitem dividir a interface em componentes independentes e reutilizaveis. Por isso quando contruimos aplicações em React o que estamos a produzir é um conjunto de componentes isolados e reutilizaveis, que depois são combinados para criar aplicações complexas.

### Exemplo de componentes

![exemplo de componentes](https://foxcoding.net/edit/components_example.png)

Imaginem que seria voces a criar o proximo Youtube como dividiriam esta interface?  
Como fariam para reaproveitar o máximo de codigo possivel.

## Tipos de componentes

Em React existem duas formas de criarmos componentes os **Class Components** e os **Functional Components**

### Class Components

Os class components como o nome indica são componentes baseados em classes de javascript, Classes são "funções especiais" estando subdivididas em duas tipologias as `Class Expresions` e as `Class Declarations` (Mais informação no documento sobre classes)

[Classes MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes)

### Exemplo de Class Components

```jsx
// Class Component

import React, {Component} from 'react

class ClassComponent extends Component {

    /* Aqui inserimos toda a logica que respeita a este componente - Life Cycle methods, funcões privadas e Contrutores */


    /* Metodo obrigatorio para renderizar este componente */

    render(){
        return <div>Isto é um Class Component!</div>
    }
}

```

Este tipo de declaração de componentes tem vindo a entrar em desuso, e tem sido substituida pela declaração utilizando `Functional Components`, tudo graças ao lançamento de `Hooks` em React 16 que nos permitiram ter acesso as mesmas funcionalidades de life cycles em componentes funcionais.

### Functional Components

Funtional componentes como o proprio nome indica não são mais que compomponentes criado atraves de funções, o retorno dessa função é o elemento que pretendemos renderizar.

### Exemplo de Functional Components

```jsx
// Em certos ambientes ja se torna descenessario fazer a importação de react
import React from "react";

const FunctionalComponent = () => {
	/* Lógica da aplicação  - Hooks,estados, metodos, variaveis */

	/* Para renderizar o componente basta retornar o elemento JSX que queremos apresentar */

	return <div>Isto é um Functional Component!</div>;
};
```

\*Nota: podemos usar qualquer tipo de função para declarar um functional component: arrow functions, named functions, ou uma função normal

## Utilização de componentes em JSX

Depois de criados os nossos componentes são de utilização facil

```jsx

const App = () => {
    const appName = "Mega App"
    return (
        <main>
        <h1>{appName}</h1>
        </main>
    )
}

// Como Utilizamos
<App />
<App></App>
```

## Arquitectura

## Props

## Receita

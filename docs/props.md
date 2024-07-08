# [🏠](./README.md) - [Componentes](./componentes.md) - Props

## Props

Para conseguirmos que os componentes aceitem diferentes tipos de dados podemos utilizar um recurso interno as Props.  
Props são argumentos que são passados para os nossos componentes em React

Props são passados aos nossos componentes como os atributos HTML. Podemos passar componentes de pais para filhos mas não é possivel passarmos de filhos para pais.

A informação passada como props é read-only isto é não pode ser modificada pelo componente que a recebe.

`props = propriedades`

```jsx
const App = (props) => {
	const appName = props.title;
	return (
		<main>
			<h1>{appName}</h1>
		</main>
	);
};

// Como Utilizamos
<App title="title" />;
```

### Multiplas props

```jsx
const App = (props) => {
	return (
		<main>
			<h1>{props.title}</h1>
			<p>{props.description}</p>
		</main>
	);
};

// Como Utilizamos
<App title="title" description="" />;
```

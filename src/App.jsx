import Footer from "./components/Layout/Footer/Footer.jsx";
import Title from "./components/Title/Title.jsx";

// Componente é simplesmente uma função que retorna JSX.
// Recebe um parametro opcional props (propriedades).
// Por padrão escrevemos os nossos componentes em Pascal Case (ex: MeuComponente)

// Arquitectura de componente
// Componente: App
// Argumentos:
// 	- props (é um objeto que por defeito é vazio)
function App(props) {
	// Universo da Logica - Aqui declaramos:
	// - Variaveis
	// - Funcoes
	// - Declarações (if, else, for, forEach)
	// - Efetuamos cálculos
	const title = "Cenas!!!";

	// Universo da Renderização (JSX)
	// - Componentes retornam obrigatoriamente JSX (== React.createElements)
	return (
		<>
			<div>
				{/* title é uma variavel com a string "Cenas!!!" */}
				<h1>Hello Edit - {title}</h1>

				{/* Isto é como se utiliza um componente:
					chamar como se fosse uma tag 
					<Title /> ou <Title></Title> */}
				<Title text="Hello Edit" id="title">
					Hello Edit!
				</Title>

				<Title text="Cenas"></Title>
			</div>
			<Footer />
		</>
	);
}

export default App;

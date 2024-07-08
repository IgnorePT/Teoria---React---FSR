// Return implicito : const Title = () => <h1>Cenas!</h1>;

//Props - objeto
function Title(props) {
	const { text, id, children } = props;
	return <h1 id={id}>{text}</h1>;
}

export default Title;

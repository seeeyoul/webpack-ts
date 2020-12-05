import React from "react";

interface IProps {
	name: string;
	age: number;
}

function App(props: IProps) {
	const { name, age } = props;
	return (
		<div>
			<span>{`${name} + ${age}`}</span>
		</div>
	)
}

export default App;

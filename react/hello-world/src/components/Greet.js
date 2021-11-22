import React from "react";

// FIRSTEFUL I USED THIS WAY
// function Greet() {
// 	return <h1>Hello Ramazan Greet.Js</h1>;
// }
// export default Greet;

//SECONDLY I USED THIS WAY- ALSO CHANGED IMPORT AT APP.JS    --import Greet from "./components/Greet";
// export const Greet = () => (
// 	<h1>Hello Ramazan Second Way to say Hello at Greet.Js</h1>
// );

const Greet = (props) => {
	console.log(props);
	return (
		<div>
			<h1>
				Hello {props.name} a.k.a {props.heroname}
			</h1>
			{props.children}
		</div>
	);
};

export default Greet;

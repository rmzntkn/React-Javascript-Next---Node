import React from "react";

// const Hello = () => {
// 	return (
// 		<div>
// 			<h1>Hello without JSX</h1>
// 		</div>
// 	);
// };

const Hello = () => {
	return React.createElement(
		"div",
		null,
		React.createElement("h1", null, "Hello with JSX")
	);
};

export default Hello;

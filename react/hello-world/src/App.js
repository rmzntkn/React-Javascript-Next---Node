import logo from "./logo.svg";
import "./App.css";
import { Component } from "react";
import Welcome from "./components/Welcome";
import Hello from "./components/Hello";
import Greet from "./components/Greet";
import Message from "./components/Message";
import Counter from "./components/Counter";

class App extends Component {
	render() {
		return (
			<div className="App">
				<Counter />
				{/* <Message /> */}

				{/* <Greet name="Ramazan" heroname="Tekin">
					<p>This is children props</p>
				</Greet>
				<Greet name="Saban" heroname="Dinc">
					<button>Action</button>
				</Greet>

				<Greet name="Recep" heroname="Aslan" />
				<Welcome name="omer" heroname="Tekin" />
				<Welcome name="Saban" heroname="Dinc" />
				<Welcome name="Recep" heroname="Aslan" />
				<Hello /> */}
			</div>
		);
	}
}

export default App;

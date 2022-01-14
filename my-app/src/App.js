import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/Navbar";
import { Component } from "react";
import User from "./components/User";
import Card from "./components/Card";
import Collapse from "./components/Collapse";

class App extends Component {
	render() {
		return (
			<div>
				<div className="container ">
					<Navbar title="User Interface" />
					<User />
					<div className="card-group">
						<Collapse href="collapseExample1">
							<div className="col-md-3">
								<Card cardTitle="South Jersey " />
							</div>
						</Collapse>
						<Collapse href="collapseExample2">
							<div className="col-md-3">
								<Card cardTitle="Philedephia " />
							</div>
						</Collapse>
						<Collapse href="collapseExample3">
							<div className="col-md-3">
								<Card cardTitle="Bethlehem " />
							</div>
						</Collapse>
					</div>
				</div>
			</div>
		);
	}
}
export default App;

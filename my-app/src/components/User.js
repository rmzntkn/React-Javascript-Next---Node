import react from "react";
import { Component } from "react";

class User extends Component {
	render() {
		//desconstruct
		const { name, lastName, salary } = this.props;

		return (
			<div>
				<li>Name:{name}</li>
				<li>Last Name: {lastName}</li>
				<li>Salary: {salary}</li>
			</div>
		);
	}
}
export default User;

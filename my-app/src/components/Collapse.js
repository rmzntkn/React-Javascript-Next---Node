import react from "react";
import React, { Component } from "react";

class Collapse extends React.Component {
	constructor() {
		super();
		this.state = {
			showContent: false,
		};
	}

	render() {
		return (
			<div>
				<button
					className="btn btn-primary w-100"
					onClick={this.showMore}
				></button>

				<div className="collapse" id={props.href}>
					{props.children}
				</div>
			</div>
		);
	}
}
export default Collapse;

import react from "react";
import React, { Component } from "react";

class Card extends React.Component {
	render() {
		return (
			<div>
				<div className="card">
					<img src="..." className="card-img-top" alt="..." />
					<div className="card-body">
						<h5 className="card-title">{this.props.cardTitle}</h5>
						<p className="card-text">
							This is a wider card with supporting text below as a natural
							lead-in to additional content. This content is a little bit
							longer.
						</p>
						<p className="card-text">
							<small className="text-muted">Last updated 3 mins ago</small>
						</p>
					</div>
				</div>
			</div>
		);
	}
}

export default Card;

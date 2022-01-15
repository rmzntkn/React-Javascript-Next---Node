import classes from "./MeetupDetail.module.css";

function MeetUpDetail(props) {
	return (
		<section className={classes.details}>
			<img src={props.image} alt={props.tutle} />
			<h1>{props.title}</h1>
			<address>{props.title}</address>
			<p>{props.description}</p>
		</section>
	);
}
export default MeetUpDetail;

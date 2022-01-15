import { Fragment } from "react";
import MeetupDetail from "../../components/meetups/MeetupDetail";

function MeetUpDetails() {
	return (
		<MeetupDetail
			image="https://upload.wikimedia.org/wikipedia/commons/thumb/2/22/Hagia_Sophia_Mars_2013.jpg/2880px-Hagia_Sophia_Mars_2013.jpg"
			alt="A first Meetup"
			title="test"
			description="test2"
			address="some city,some place"
		/>
	);
}
export default MeetUpDetails;

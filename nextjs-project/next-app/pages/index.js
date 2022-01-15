import Layout from "../components/layout/Layout";
import MeetupList from "../components/meetups/MeetupList";
import { useState, useEffect } from "react";

const DUMMY_MEETUPS = [
	{
		id: "M1",
		title: "A first meet up",
		image:
			"https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_München.jpg/1280px-Stadtbild_München.jpg",
		address: "6 Chandler Ln, Voorhees",
		description: "First Meeting",
	},
	{
		id: "M2",
		title: "Second meet up",
		image:
			"https://upload.wikimedia.org/wikipedia/commons/thumb/2/22/Hagia_Sophia_Mars_2013.jpg/2880px-Hagia_Sophia_Mars_2013.jpg",
		address: "1148 Golden Pond, Voorhees",
		description: "Second Meeting",
	},
];
function homePage() {
	const [loadedMeetups, setLoadedMeetups] = useState([]);

	useEffect(() => {
		setLoadedMeetups(DUMMY_MEETUPS);
	}, []);
	return;

	<MeetupList meetups={loadedMeetups} />;
}

export default homePage;

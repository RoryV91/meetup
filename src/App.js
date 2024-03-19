import CitySearch from "./components/CitySearch";
import EventList from "./components/EventList";
import NumberOfEvents from "./components/NumberOfEvents";
import { useEffect, useState } from "react";
import { extractLocations, getEvents } from "./api";
import { InfoAlert, ErrorAlert } from "./components/Alert";

import "./App.css";

const App = () => {
	const [allLocations, setAllLocations] = useState([]);
	const [currentNOE, setCurrentNOE] = useState(32);
	const [events, setEvents] = useState([]);
	const [currentCity, setCurrentCity] = useState("See all cities");
	const [infoAlert, setInfoAlert] = useState("");
	const [errorAlert, setErrorAlert] = useState("");

	useEffect(() => {
		fetchData();
	}, [currentCity, currentNOE]);

	const fetchData = async () => {
		const allEvents = await getEvents();
		const filteredEvents =
			currentCity === "See all cities"
				? allEvents
				: allEvents.filter((event) => event.location === currentCity);
		setEvents(filteredEvents.slice(0, currentNOE));
		setAllLocations(extractLocations(allEvents));
	};

	return (
		<div className="App">
			<div className="alerts-container">
				{infoAlert.length ? <InfoAlert text={infoAlert} /> : null}
				{errorAlert.length ? <ErrorAlert text={errorAlert} /> : null}
			</div>
			<h1 id="title">meetup.</h1>
			<h2>The place to go, to find places to go and meet people.</h2>
			<CitySearch
				allLocations={allLocations}
				setCurrentCity={setCurrentCity}
				setInfoAlert={setInfoAlert}
			/>
			<NumberOfEvents
				currentNOE={currentNOE}
				setCurrentNOE={setCurrentNOE}
				setErrorAlert={setErrorAlert}
			/>
			<EventList events={events} />
		</div>
	);
};

export default App;

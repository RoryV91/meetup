import CitySearch from "./components/CitySearch";
import EventList from "./components/EventList";
import NumberOfEvents from "./components/NumberOfEvents";
import CityEventsChart from "./components/CityEventsChart";
import { useEffect, useState, useCallback } from "react";
import { extractLocations, getEvents } from "./api";
import { InfoAlert, ErrorAlert, WarningAlert } from "./components/Alert";

import "./App.css";

const App = () => {
	const [allLocations, setAllLocations] = useState([]);
	const [currentNOE, setCurrentNOE] = useState(32);
	const [events, setEvents] = useState([]);
	const [currentCity, setCurrentCity] = useState("See all cities");
	const [infoAlert, setInfoAlert] = useState("");
	const [errorAlert, setErrorAlert] = useState("");
	const [warningAlert, setWarningAlert] = useState("");

	const fetchData = useCallback(async () => {
		const allEvents = await getEvents();
		const filteredEvents =
		  currentCity === "See all cities"
			? allEvents
			: allEvents.filter((event) => event.location === currentCity);
		setEvents(filteredEvents.slice(0, currentNOE));
		setAllLocations(extractLocations(allEvents));
	  }, [currentCity, currentNOE]);

	useEffect(() => {
		if (!navigator.onLine) {
		  setWarningAlert("You are currently offline. Some features may not be available.");
		} else {
		  setWarningAlert("");
		}
		  
		fetchData();
	  }, [fetchData]);


	return (
		<div className="App">
			<div className="alerts-container">
				{infoAlert.length ? <InfoAlert text={infoAlert} /> : null}
				{errorAlert.length ? <ErrorAlert text={errorAlert} /> : null}
				{warningAlert.length ? <WarningAlert text={warningAlert} /> : null}
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
			<div className="charts-container">
			<CityEventsChart events={events} allLocations={allLocations}/>
			</div>
			<EventList events={events} />
		</div>
	);
};

export default App;

import React from "react";

const NumberOfEvents = ({ currentNOE, setCurrentNOE, setErrorAlert }) => {
	const handleInputChange = (event) => {
		const value = event.target.value;
		setCurrentNOE(value === "" ? "" : value <= 0 ? 0 : value);

		let errorText;
		if (value <= 0 || isNaN(value)) {
			errorText = "Number of events must be greater than 0";
		} else {
			errorText = "";
		}
		setErrorAlert(errorText);
	};

	return (
		<div id="number-of-events">
			<label htmlFor="numberOfEventsInput">Number of Events: </label>
			<input
				type="number"
				id="numberOfEventsInput"
				value={currentNOE}
				onChange={handleInputChange}
			/>
		</div>
	);
};

export default NumberOfEvents;

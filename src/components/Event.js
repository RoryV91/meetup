import React, { useState } from "react";

function Event({ event }) {
	const [showDetails, setShowDetails] = useState(false);

	return (
		<li className="event">
			<h1>{event.summary}</h1>
			<div className="event-info">
				<span
					role="img"
					aria-label="calendar emoji"
				>
					🗓️
				</span>
				<p>{new Date(event.created).toString()}</p>
			</div>
			<div className="event-info">
				<span
					role="img"
					aria-label="calendar emoji"
				>
					📍
				</span>
				<p>{event.location}</p>
			</div>
			{showDetails && (
				<div className="event-details">
					<p>Status: {event.status}</p>
					<p>{event.description}</p>
				</div>
			)}
			<button className="details-btn" onClick={() => setShowDetails(!showDetails)}>
				{showDetails ? "Hide Details" : "Show Details"}
			</button>
			
		</li>
	);
}

export default Event;

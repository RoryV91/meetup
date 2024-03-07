import React, { useState } from 'react';

function Event({ event }) {
    const [showDetails, setShowDetails] = useState(false);

    return (
        <li>
            <h1>{event.summary}</h1>
            <p>{new Date(event.created).toString()}</p>
            <p>{event.location}</p>
            {showDetails && <p>{event.description}</p>}
            <button onClick={() => setShowDetails(!showDetails)}>
                {showDetails ? 'Hide Details' : 'Show Details'}
            </button>
        </li>
    );
}

export default Event;
import React, { useState } from 'react';

const NumberOfEvents = () => {
    const [numberOfEvents, setNumberOfEvents] = useState(32);

    const handleInputChange = (event) => {
        setNumberOfEvents(event.target.value);
    };

    return (
        <div id="number-of-events">
            <label htmlFor="numberOfEventsInput">Number of Events: </label>
            <input
                type="number"
                id="numberOfEventsInput"
                value={numberOfEvents}
                onChange={handleInputChange}
            />
        </div>
    );
};

export default NumberOfEvents;
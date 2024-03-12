import React from 'react';

const NumberOfEvents = ({ currentNOE, setCurrentNOE }) => {
    const handleInputChange = (event) => {
        const value = event.target.value;
        setCurrentNOE(value < 1 ? 1 : value);
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
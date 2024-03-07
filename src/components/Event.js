const Event = ({ event }) => {
    return (
        <li>
            <h1>{event.summary}</h1>
            <p>{new Date(event.created).toString()}</p>
            <p>{event.location}</p>
            <button>Show Details</button>
        </li>
    );
}

export default Event;
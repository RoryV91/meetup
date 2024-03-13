import Event from "./Event";

const EventList = ({ events }) => {
  return (
    <ul id="event-list">
      {events && events.length > 0 ? (
        events.map((event) => (
          <Event
            key={event.id}
            event={event}
          />
        ))
      ) : (
        <li id="no-events-li">No Events!</li>
      )}
    </ul>
  );
};

export default EventList;

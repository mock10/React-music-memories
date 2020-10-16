import React from "react";
import "./EventElement.scss"

const EventElement = ({event}) => {
    if (event === null) return null;

    return (
        <div className="events__list__element">
            <h2>
            {event.displayName}
            </h2>
            <p>{event.location.city}</p>
            <p>{event.venue.displayName}</p>
        </div>
    )
}

export default EventElement;
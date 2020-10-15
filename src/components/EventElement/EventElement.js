import React from "react";
import "./EventElement.scss"

const EventElement = ({event}) => {

    return (
        <div className="test">
            <h2>
            {event.displayName}
            </h2>
            <p>{event.location.city}</p>
            <p>{event.venue.displayName}</p>

        </div>

    )
    


}

export default EventElement;
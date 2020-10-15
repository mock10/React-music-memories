import React from "react";
import EventElement from "../EventElement/EventElement";
import "./EventList.scss"

const EventList = ({events}) => {
    const renderedList = events.map((event, id)=> {
        return <EventElement event= {event} key= {event.id}/>

    });

    return (
        <div className="work">
    <div className="event-list">{renderedList}</div>
    
    </div>
    )

}

export default EventList;
import React from "react";
import EventElement from "../EventElement/EventElement";
import "./EventList.scss"

const EventList = ({events}) => {
    let renderList;
    if(events) {
       renderList= events.map((event, id)=> {
            return <EventElement event= {event} key= {event.id}/>
    
        });

    } else {
        renderList= "Brak eventów"
    }
    return (
        <div className="events">
            <div className="events__list">{renderList}</div>
        </div>
    )
}

export default EventList;
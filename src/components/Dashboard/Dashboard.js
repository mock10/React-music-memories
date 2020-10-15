import React, { useEffect, useState } from "react";
import SearchBar from "../SearchBar/SearchBar";
import EventList from "../EventList/EventList";
import "./Dashboard.scss"


const KEY = "tsF65YcYw8nMLp7Z";
const fetchURL = "https://api.songkick.com/api/3.0/events.json?apikey=tsF65YcYw8nMLp7Z";
    

const Dashboard = () => {
    const [events, setEvents] = useState([]);

    const onTermSubmit = (term) => {
        fetch(`${fetchURL}&artist_name=${term}`, {
            method: "GET",
          }) 
        .then(response => response.json())

        .then(response => setEvents(response.resultsPage.results.event));
    }
    console.log(events)

    return (
        <>
        <SearchBar onTermSubmit={onTermSubmit}/>
        <EventList events={events}/>
        </>


    )

}


export default Dashboard;

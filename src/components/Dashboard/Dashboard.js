import React, { useEffect, useState } from "react";
import SearchBar from "../SearchBar/SearchBar";
import EventList from "../EventList/EventList";
import DashboardHeading from "../DashboardHeading/DashboardHeading"
import "./Dashboard.scss"


const KEY = "tsF65YcYw8nMLp7Z";
const fetchURL = "https://api.songkick.com/api/3.0/events.json?apikey=tsF65YcYw8nMLp7Z";
    

const Dashboard = () => {
    const [events, setEvents] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    

    const onTermSubmit = (term) => {
        fetch(`${fetchURL}&artist_name=${term}`, {
            method: "GET",
          }) 
        .then(response=>{
            if(response.ok){
                return response;
            } throw Error ("coś poszło nie tak")

        })
        .then(response => response.json())
        .then(response => setEvents(response.resultsPage.results.event))
        .catch(error => console.log(error) );
    }
    
    console.log(events)

    return (
        <>
        <DashboardHeading/>
        <SearchBar onTermSubmit={onTermSubmit}/>
        <EventList events={events}/>
        </>
    )

}


export default Dashboard;

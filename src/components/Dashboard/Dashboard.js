import React, { useState } from "react";
import SearchBar from "../SearchBar/SearchBar";
import EventList from "../EventList/EventList";
import DashboardHeading from "../DashboardHeading/DashboardHeading";
import "./Dashboard.scss";
import Footer from "../Footer/Footer";
// import DashboardNav from "../DashboardNav/DashboardNav";


const fetchURL = "https://api.songkick.com/api/3.0/events.json?apikey=tsF65YcYw8nMLp7Z";
    

const Dashboard = () => {
    const [events, setEvents] = useState([]);

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
    

    return (
        <>
        <DashboardHeading/>
        <SearchBar onTermSubmit={onTermSubmit}/>
        <EventList events={events}/>
        <Footer></Footer>
        </>
    )

}


export default Dashboard;

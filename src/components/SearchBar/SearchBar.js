import React, { useEffect, useState } from "react";
import "./SearchBar.scss"
import FormInput from "../FormInput/FormInput";
const KEY = "tsF65YcYw8nMLp7Z";
const fetchURL = "https://api.songkick.com/api/3.0/events.json?apikey=tsF65YcYw8nMLp7Z&";

const SearchBar = (props) => {
    const [term, setTerm] = useState("");

    const handleChange = (e) => {
        setTerm(e.target.value);
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        props.onTermSubmit(term);
    }
    
    return (
        <>
        <div className="searchbar">
        <div className= "title">Wyszukiwarka koncertów </div>
        <div className="searchbar__content">
            <form onSubmit ={handleSubmit}>
                <FormInput
                    type= "text"
                    name= "term"
                    value= {term}
                    onChange={handleChange}
                    label= "Wpisz nazwę artysty lub zespołu"
                />
            </form>
        </div>
        </div>
        </>
    )

}
export default SearchBar;
import React from "react";
import './About.scss'
import Logo from "../Logo/Logo"

const About = () => {
    return (
        <section className="about">
        <div className="about__content">
            <div className="about__left">
                <Logo color="#FFE4C4"/>
                <p>Music Memories App</p>
            </div>
            <div className= "about__right">
                <p>Aplikacja umożliwia tworzenie spersonalizowanej listy muzycznych eventów. 
                    Zamknij oczy i przeniknij w krainę muzycznych wspomnień.  </p>
            </div> 
        </div>
        </section>
    )

}
export default About;
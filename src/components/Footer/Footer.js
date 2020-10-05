import React from "react";
import "./Footer.scss";

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer__media">
                <a href="#"><i class="fab fa-facebook fa-2x"></i></a>
                <a href="#"><i class="fab fa-twitter fa-2x"></i></a>
                <a href="#"><i class="fab fa-youtube fa-2x"></i></a>
                <a href="#"><i class="fab fa-linkedin fa-2x"></i></a>
            </div>
            <p>Copyright &copy; Mume</p>
    </footer>
    )
}

export default Footer;
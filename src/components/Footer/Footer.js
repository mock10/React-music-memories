import React from "react";
import "./Footer.scss";

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer__media">
                <a href="facebook.com"><i className="fab fa-facebook fa-2x"></i></a>
                <a href="twitter.com"><i className="fab fa-twitter fa-2x"></i></a>
                <a href="github.com"><i className="fab fa-github fa-2x"></i></a>
                <a href="linkedin.com"><i className="fab fa-linkedin fa-2x"></i></a>
            </div>
            <p>Copyright &copy; Mume</p>
    </footer>
    )
}

export default Footer;
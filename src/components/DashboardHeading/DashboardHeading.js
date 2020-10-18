import React from "react";
import "./DashboardHeading.scss"

const DashboardHeading = () => {
    return (
        <div className="container">
            <div className="dashboard__heading">
                <div className="dashboard__heading__content">
                    <h1>Witaj w aplikacji</h1>
                    <p>Znajdź ulubione koncerty i nie pozwól uciec wspomnienią.</p>
                </div>
            </div>
        </div>
        )
}

export default DashboardHeading;

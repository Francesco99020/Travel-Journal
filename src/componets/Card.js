import React from "react";
import RedLocationIcon from "../images/RedLocationIcon.png";

function Card(props){
    return(
        <div className="card">
            <div className="card--imageHolder">
                <img className="card--image" src={props.image} alt='trip' />
            </div>
            <div className="card--locationDetails">
                <img className="card--locationIcon" src={RedLocationIcon} alt='location icon' />
                <h5 className="card--location">{props.location}</h5>
                <a className="card--googleLink" href={props.googleMapsLink}>view on google maps</a>
            </div>
            <h2 className="card--specificLocation"><b>{props.specificLocation}</b></h2>
            <p className="card--tripDates"><b>{props.tripStartDate} - {props.tripEndDate}</b></p>
            <p className="card--description">{props.description}</p>
        </div>
    );
}

export default Card;
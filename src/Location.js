import React from "react";
import "./Location.css";

const Location = (props) => {
    if (props.data.til_close) {
        return (
            <div className={"Location " + (props.data.open ? "Location-Open" : "Location-Closed")}>
                <span>{props.name}</span>
                <br />
                <span>{props.data.til_close} 'til close</span>
            </div>
        );
    } else {
        return (
            <div className={"Location " + (props.data.open ? "Location-Open" : "Location-Closed")}>
                <span>{props.name}</span>
            </div>
        );
    }
};

export default Location;

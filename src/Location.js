import React from "react";
import "./Location.css";

const Location = (props) => {
    return <div className={"Location " + (props.data.open ? "Location-Open" : "Location-Closed")}>{props.name}</div>;
};

export default Location;

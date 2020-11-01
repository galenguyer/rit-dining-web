import React from "react";
import useSWR from "swr";
import Location from "./Location";
import logo from "./logo.svg";
import "./App.css";

const App = () => {
    const API_URL = "https://ritdiningapi.nyaa.gay/api/v1/";

    const { data: data, error: error } = useSWR(API_URL + "open");

    if (error) {
        return (
            <div className="App">
                <h1>What's open at RIT?</h1>

                <p>oh no a fucky wucky happened</p>
            </div>
        );
    }
    if (!data) {
        return (
            <div className="App">
                <h1>What's open at RIT?</h1>

                <p>loading...</p>
            </div>
        );
    }

    const keyList = [];
    for (const key in data) {
        keyList.push(key);
    }

    return (
        <div className="App">
            <h1>What's open at RIT?</h1>
            {keyList.map((key) => {
                if (data[key].open) return <Location name={key} data={data[key]} />;
            })}

            {keyList.map((key) => {
                if (!data[key].open) return <Location name={key} data={data[key]} />;
            })}
        </div>
    );
};

export default App;

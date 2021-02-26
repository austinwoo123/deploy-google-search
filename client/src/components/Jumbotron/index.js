import React from "react";

function Jumbotron() {
    return (
        <span class="border">
            <div
                style={{ height: 300, clear: "both", paddingTop: 120, textAlign: "center" }}
                className="jumbotron"
            >
                <h1>(React) Google Books Search</h1>
                <p>Search for and Save Books of Interest</p>
            </div>
        </span>
    );
}

export default Jumbotron;

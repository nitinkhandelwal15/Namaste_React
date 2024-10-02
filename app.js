
import React from "react";
import ReactDOM from "react-dom/client";

const heading3 = React.createElement("div", { id: "p1"},
        [
                React.createElement("div",
                { id: "c1" },
                        [
                                React.createElement("h1", {}, " this is basically div > (div > h1*2)*2"), 
                                React.createElement("h1", {}, " this is basically div > (div > h1*2)*2")
                        ])
                ,
                React.createElement("div",
                        { id: "c2" },
                        [
                                React.createElement("h1", {}, " this is basically div > (div > h1*2)*2"), 
                                React.createElement("h1", {}, " this is basically div > (div > h1*2)*2")
                        ])
        ]
        
);
const root3 = ReactDOM.createRoot(document.getElementById("root"));
root3.render(heading3);
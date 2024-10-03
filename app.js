
import React from "react";
import ReactDOM from "react-dom/client";

//const heading = <h1 className="C1">Hello World in JSX</h1>;

const heading = (
        <h1 className="JSXclass" tabIndex={1}>
                Hello World in JSX...multiple lines
        </h1>
);

const Title = () => (
        <h1> This is Title component(functional component)
                <p>This is Component Composition..basically Component ke ander component</p>
        </h1>
);

const ComponentCompositionHeading = ()=> (
        <div id="div1">
                {Title()}
                <Title/>
                <Title></Title>
        </div>
)

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<ComponentCompositionHeading/>);
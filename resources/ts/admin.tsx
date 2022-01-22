import React from "react";
import ReactDOM from "react-dom";

const App: React.FC = () => {
    return (
        <div>
            <p>Hello World</p>
        </div>
    );
};

if (document.getElementById("app")) {
    ReactDOM.render(<App />, document.getElementById("app"));
}

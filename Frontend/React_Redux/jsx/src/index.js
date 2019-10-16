import React from 'react';
import ReactDOM from 'react-dom';

function GetButtonText(){
    return "DSDSDSD";
}

const App = () => {
    const buttonName = "asdasd";
    const button = {
        name: "asdasdasd"
    }

    return (
        <div>
            <label className="label" htmlFor="name">Enter name:</label>
            <input id="name" type="text"/>
            <button style={{backgroundColor:'blue', color: 'white'}}>
                {button.name}
            </button>
        </div>
    );
};

ReactDOM.render(<App />, document.getElementById("root"));

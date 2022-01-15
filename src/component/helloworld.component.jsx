import React from "react";
import './helloworld.style.css';
import {logDOM} from "@testing-library/react";

function HelloWorldFunction(props) {
    return (
        <div>
            <h1 className="red">Hello {props.name} !</h1>
        </div>
    );
}

class HelloWorldClass extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <h1 className="red">Hello {this.props.name} !</h1>
            </div>
        );
    }
}

export default HelloWorldFunction;

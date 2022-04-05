import React, { Component } from "react";

export class UnMountingPhase extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showChild: true
        }
    } 

    render() {
        console.log("unmount render");
        return (
            <>
                <h3>Un mounting phase</h3>
                {this.state.showChild && <Child />}
                <button type="button" onClick={() => this.setState({showChild: false})}>Un mount</button>
            </>
        )
    }
}

class Child extends Component {
    componentWillUnmount() {
        console.log("Unmounted");
    }

    render() {
        return (
            <>
                <div>Child</div>
            </>
        )
    }
}
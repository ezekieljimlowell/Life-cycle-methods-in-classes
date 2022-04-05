import React, { Component } from "react";

export class UpdatingPhase extends Component {
    constructor(props) {
        super(props);
        this.state = {
            updateData: 0
        }
        console.log("Updating phase Constructor");
    }

    static getDerivedStateFromProps(props, state) {
        console.log("UPDATING getderived State from props");
        return state.updateData;
    }

    shouldComponentUpdate() {
        console.log("updating should component update");
        return true;
    }

    getSnapshotBeforeUpdate(prevprops, prevState) {
        console.log("getSnapshotBeforeUpdate", prevState.updateData);
        return prevState.updateData;
    }

    componentDidUpdate() {
        console.log("updating componentDidUpdate");
    }
    
    changeData = () => {
        setTimeout(() => {
            this.setState({
                updateData: "hello"
            })
        }, 2000);
    }

    render() {
        console.log("Render for updating phase");
        return (
            <>
                <div>{this.state.updateData}</div>
                <button onClick={this.changeData}>Change</button>
            </>
        )
    }
}
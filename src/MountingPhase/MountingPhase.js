import React, { Component } from 'react';

export class MountingPhase extends Component {
    constructor(props) {
        super(props);
        this.state = {
            initialState: 100,
            showData: true
        }
        console.log(this.state.initialState);
    }

    static getDerivedStateFromProps() {
        console.log("getDerivedStateFromProps");
        return "nothing";
    }

    componentDidMount() {
        this.setState({
            initialState: 20
        })
        console.log("Component did mount");
    }

    shouldComponentUpdate() {
        console.log("Should component update");
        return true;
    }

    componentDidUpdate() {
        console.log("component did update");
    }
    
    render() {
        console.log("render");
        return (
            <>
                <h3>Mounting Phase</h3>
                <div>{this.state.initialState}</div>
                <button type="button" onClick={() => { 
                    this.setState({
                    initialState: "Amberson",
                    showData: false
                })}}>Change</button>
                <div>{this.state.showData && this.props.data}</div>
            </>
        )
    }
}
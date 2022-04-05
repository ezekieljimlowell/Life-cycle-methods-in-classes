import React, { Component } from "react";

export class Deprecated extends Component {
    constructor(props) {
        super(props);
        this.state = {
            deprecatedData: [],
            unsafeData: "green"
        }
        console.log();
    }

    URL = "https://jsonplaceholder.typicode.com/users";

    UNSAFE_componentWillMount() {
        setTimeout(() => {
            fetch(this.URL).then(response => response.json()).then(data => {
                console.log(data);
                const arr = [...data]
                this.setState({
                deprecatedData: arr
            })})
        }, 2000);
        console.log("UNSAFE_componentWillMount")
    }

    render() {
        setTimeout(() => {
            this.setState({
                unsafeData: "yellow"
            })
        }, 3000);
        return (
            <>
                <div>
                    <h3>Deprecated</h3>
                    {this.state.deprecatedData.length > 0 && <div>
                        {this.state.deprecatedData.map(data => <div key={data.name}>{data.name}</div>)}
                        </div>}
                    <Unsafe unsafeData={this.state.unsafeData}/>
                </div>
            </>
        )
    }
}

class Unsafe extends Component {
    UNSAFE_componentWillReceiveProps(next) {
        console.log("UNSAFE_componentWillReceiveProps", next);
    }

    UNSAFE_componentWillUpdate() {
        console.log("UNSAFE_componentWillUpdate")
    }
    render() {
        console.log("Deprecated render");
        return (
            <div>{this.props.unsafeData}</div>
        )
    }
}
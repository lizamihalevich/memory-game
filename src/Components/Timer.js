import React from "react";

const INTERVAL = 59;

 export default class Timer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {value: 0};
    }

    increment(){
        this.setState({value: this.state.value + 1});
    }

    componentDidMount() {
        this.timerID = setInterval(() => this.increment(), 10);
    }

    componentWillUnmount() {
        clearInterval(this.timerID);
    }

    render() {
        const value = this.state.value
        return (
            <div>
                    <span>{Math.round(value/INTERVAL/120)} : </span>
                    <span>{Math.round(value/INTERVAL)} </span>
            </div>
        );
    }
}


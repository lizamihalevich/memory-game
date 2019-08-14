import React from "react";
import victory from './images/victory.png'
import Layout from "./Layout";

class Victory extends React.Component {
    constructor(props){
        super(props)
    }

    render(){
        let layout = new Layout(2,4);
        return (
            <div className="victory">
                <div>Congratulations!</div>
                <div>
                    <img src={victory}/>
                </div>
                <button className="btn-play-again" onClick={()=>layout.onPlayAgain(2,4)}>Next Level</button>
            </div>
        )
    }
}

export default Victory

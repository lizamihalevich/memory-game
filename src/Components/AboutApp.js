import React from "react";

export default class AboutApp extends React.Component{
    render(){
        return(
            <div className="about-app">
                <ul className="game-rules">
                    <div>Game rules: </div>
                    <li>When the game begins, all pictures are hidden.</li>
                    <li>Only 2 cards can be chosen simultaneously.</li>
                    <li>If pictures on both selected cards match - they will stay opened till the end of the game</li>
                </ul>
                <ul>
                    <div className="how-to-play">How to play: </div>
                    <li>When the game begins, all pictures are hidden.</li>
                    <li>Only 2 cards can be chosen simultaneously.</li>
                    <li>If pictures on both selected cards match - they will stay opened till the end of the game</li>
                </ul>
            </div>
        )
    }
}
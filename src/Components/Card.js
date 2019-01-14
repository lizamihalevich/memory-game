import React from "react";
import './style.css';
import back from './images/back.jpg';
import _1 from './images/_1.jpg';
import _2 from './images/_2.jpg';
import _3 from './images/_3.jpg';
import _4 from './images/_4.jpg';
import _5 from './images/_5.jpg';
import _6 from './images/_6.jpg';
import _7 from './images/_7.jpg';
import _8 from './images/_8.jpg';
import _9 from './images/_9.jpg';
import _10 from './images/_10.jpg';
import _11 from './images/_11.jpg';
import _12 from './images/_12.jpg';
import ReactCardFlip from 'react-card-flip';



export default class Card extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            isFlipped: false
        };
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(e) {
        e.preventDefault();
        this.setState((prevState)=>({ isFlipped: !prevState.flipped }));
    }

    render() {
        let imgs = [_1, _2, _3, _4, _5, _6, _7, _8, _9, _10, _11, _12];
        let pic = imgs[this.props.card.image-1];

        return (
            <div className='card'>
                <ReactCardFlip  isFlipped={this.props.card.flipped}>
                    <img src={back} key="front" onClick={this.handleClick}/>
                    <img src={pic} key="back" onClick={this.handleClick} />
                </ReactCardFlip>
            </div>
            )




    }
}


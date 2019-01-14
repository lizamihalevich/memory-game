import React from "react";
import './style.css';
import back from './images/back.jpg';
import first from './images/first.jpg';
import second from './images/second.jpg';
import third from './images/third.jpg';
import four from './images/four.jpg';
import five from './images/five.jpg';
import six from './images/six.jpg';
import seven from './images/seven.jpg';
import eight from './images/eight.jpg';
import nine from './images/nine.jpg';
import ten from './images/ten.jpg';
import eleven from './images/eleven.jpg';
import twelve from './images/twelve.jpg';
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
        let imgs = [first, second, third, four, five, six, seven, eight, nine, ten, eleven, twelve];
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


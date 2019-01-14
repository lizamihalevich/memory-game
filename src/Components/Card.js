import React from "react";
import './style.css';
import back from './images/back.jpg';
import first from './images/_1.jpg';
import second from './images/_2.jpg';
import third from './images/_3.jpg';
import four from './images/_4.jpg';
import five from './images/_5.jpg';
import six from './images/_6.jpg';
import seven from './images/_7.jpg';
import eight from './images/_8.jpg';
import nine from './images/_9.jpg';
import ten from './images/_10.jpg';
import eleven from './images/_11.jpg';
import twelve from './images/_12.jpg';
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


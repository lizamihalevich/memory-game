import React from "react";
import Card from "./Card";
import victory from "./images/victory.png";


const gameStates = {
    WaitingForTheFCard: "WFTFC",
    WaitingForTheSCard: "WFTSC"
}

class Layout extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            cards: this.createArrayOfCards(props.height, props.width),
            gameState: gameStates.WaitingForTheFCard,
            firstCard: null,
            secondCard: null,
            pairsFound: 0,
            numImages: (props.height * props.width)/2,
            turnNum: 0
        }
    }

    createArrayOfImageIndexes(number){
        let images = [];
        for(let i=1; i <= number; i++) {
            images.push(i);
            images.push(i);
        }
        this.shuffleArray(images);
        return images;
    }

    createArrayOfCards(height, width){
        let images = this.createArrayOfImageIndexes((height * width)/2);
        let cards = this.createArray(height, width);
        for (let indexOfRow=0; indexOfRow < height; indexOfRow++) {
            for(let indexOfCard=0; indexOfCard < width; indexOfCard++) {
                cards[indexOfRow][indexOfCard] = {
                    image: images[indexOfRow * width + indexOfCard],
                    flipped: false,
                    indexOfRow: indexOfRow,
                    indexOfCard: indexOfCard
                }
            }
        }
        return cards;
    }

    shuffleArray(a) {
        let j, x, i;
        for (i = a.length - 1; i > 0; i--) {
            j = Math.floor(Math.random() * (i + 1));
            x = a[i];
            a[i] = a[j];
            a[j] = x;
        }
        return a;
    }

    createArray(x, y) {
        return Array.apply(null, Array(x)).map(function(e){
            return Array(y);
        });
    }

    initGame(height, width) {
        this.setState({
                cards: this.createArrayOfCards(height, width),
                gameState: gameStates.WaitingForTheFCard,
                firstCard: null,
                secondCard: null,
                pairsFound: 0,
                numImages: (height * width)/2,
                turnNum: 0
            }
        )
    }

    onPlayAgain(height, width) {
        this.initGame(height, width);
    }

    getRandomInRange(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    generateWidth(){
        let w = this.getRandomInRange(2, 6);
        console.log(w);
        return w%2 !== 0 ? w-1 : w;
    }

    generateHeight(){
        let h = this.getRandomInRange(2, 3);
        console.log(h);
        return h;
    }

    cardClicked(card){
        if (!card.flipped) {
            switch (this.state.gameState) {
                case gameStates.WaitingForTheFCard :
                    this.state.cards[card.indexOfRow][card.indexOfCard].flipped = true;
                    this.setState({
                        cards: this.state.cards,
                        gameState: gameStates.WaitingForTheSCard,
                        firstCard: card
                    })
                    console.log(this.state.cards[card.indexOfRow][card.indexOfCard].flipped);
                    break;

                case gameStates.WaitingForTheSCard :
                    this.state.cards[card.indexOfRow][card.indexOfCard].flipped = true;
                    this.setState({cards: this.state.cards, turnNum: this.state.turnNum + 1});
                    if (this.state.firstCard.image === card.image) {
                        this.setState((prevState)=>({gameState: gameStates.WaitingForTheFCard, pairsFound: prevState.pairsFound+1}));
                    } else {
                        setTimeout(
                            function() {
                                this.state.cards[this.state.firstCard.indexOfRow][this.state.firstCard.indexOfCard].flipped = false;
                                this.state.cards[card.indexOfRow][card.indexOfCard].flipped = false;
                                this.setState({gameState: gameStates.WaitingForTheFCard, cards: this.state.cards});
                            }
                                .bind(this),
                            700
                        );

                    }
                    break;
            }
        }
    }


    render() {
        const cardsRendered = this.state.cards.map((rowOfCards, indexOfRow)=>
                <tr key={indexOfRow}>{rowOfCards.map((card, indexOfCard)=><td key={indexOfCard} onClick={()=>this.cardClicked(card)}><Card card={card} /></td>)}</tr>)

        let gameStatus;
        if (this.state.pairsFound === this.state.numImages) {

            gameStatus =
                <div className="victory">
                    <div>Congratulations!</div>
                    <div>
                        <img src={victory}/>
                        <div>turns: {this.state.turnNum}</div>
                    </div>
                    <button className="btn-play-again" onClick={()=>this.onPlayAgain(this.generateHeight(),this.generateWidth())}>Play again</button>
                </div>

        } else {
            gameStatus =

                <table className="card-field">
                    <tbody>
                    {cardsRendered}
                    </tbody>
                </table>
        }
        return (
            <div>
            {gameStatus}
            </div>
        )
    }

}

export default Layout

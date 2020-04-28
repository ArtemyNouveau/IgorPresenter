import React, {Component} from "react";
import {Button, ButtonGroup} from "react-bootstrap";
import axiosInstance from "../../axiosInstance";

import ArticleCard from "../../Components/Card/ArticleCard";
import randomInt from "../../utility/randomInt";

import style from './Cards.module.css'

class Cards extends Component {
    state = {
        cards: null,
        currentCardIndex: 0,
        visited: [0],
        backCounter: 1,
        filteredCard: null
    }

    componentDidMount() {
        this.props.loadingStart()
        axiosInstance.get('/cards.json').then((response) => {
            const cards = Object.keys(response.data).map((key) => (response.data[key]))
            this.setState({cards: cards, filteredCard: this.filterCards(cards)})
            console.log(cards);
            this.props.loadingEnd()
        }).catch((err) => {
            console.log(err)
            this.props.loadingEnd()
        })
    }

    shouldComponentUpdate(nextProps, nextState, nextContext) {
        return (
            nextProps.filterParams.length !== this.props.filterParams.length ||
            nextState.currentCardIndex !== this.state.currentCardIndex ||
            JSON.stringify(nextState.filteredCard) !== JSON.stringify(this.state.filteredCard)
        )
    }

    filterCards = (cards) => {
        if (this.props.filterParams && this.props.filterParams.length !== 0)
            return cards.filter((card) => (
                this.props.filterParams.includes(card.card.type)
            ))
        return cards
    }

    currentCard = () => {
        return this.state.filteredCard[this.state.currentCardIndex]
    }

    nextCard = () => {
        this.setState(prevState => {
            if (prevState.backCounter > 1)
                return {
                    currentCardIndex: prevState.visited[prevState.visited.length - prevState.backCounter + 1],
                    backCounter: prevState.backCounter - 1
                }
            else {
                let randomNum = randomInt(0, prevState.filteredCard.length - 1)
                if (prevState.filteredCard.length > 2)
                    while (randomNum === prevState.currentCardIndex) randomNum = randomInt(0, prevState.filteredCard.length - 1)
                return {
                    currentCardIndex: randomNum,
                    visited: prevState.visited.concat([randomNum])
                }
            }
        })
    }

    prevCard = () => {
        this.setState(prevState => {
            if (prevState.backCounter >= prevState.visited.length) return prevState
            let nextIndex = prevState.visited[prevState.visited.length - prevState.backCounter - 1]
            if (nextIndex >= prevState.filteredCard.length) {
                return prevState
            }
            return {
                currentCardIndex: nextIndex,
                backCounter: prevState.backCounter + 1
            }
        })
    }

    render() {
        if (this.state.cards === null) return null;

        this.setState(prevState => {
            const filteredCards = this.filterCards(prevState.cards)
            if (prevState.currentCardIndex >= filteredCards.length) {
                let randomNum = randomInt(0, filteredCards.length - 1)
                return {
                    filteredCard: filteredCards,
                    currentCardIndex: randomNum
                }
            }
            return {
                filteredCard: filteredCards
            }
        })
        if (this.state.filteredCard.length === 0) return <p>No Cards</p>
        const card = this.currentCard();
        return (
            <div className={style.CardsContainer}>
                <ArticleCard className={style.Card}
                             title={card.card.header}
                             text={card.card.text}
                             image={card.card.image.imgBase64}
                             type={card.card.type}
                             onClick={() => this.props.clickHandler(card.fieldsetID, card.card.header)}/>
                <ButtonGroup style={{width: "100%",}} aria-label="Basic example">
                    <Button onClick={this.prevCard} variant="secondary">prev</Button>
                    <Button onClick={this.nextCard} variant="secondary">next</Button>
                </ButtonGroup>
            </div>
        )

    }
}

export default Cards

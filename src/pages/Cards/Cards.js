import React, {Component, Fragment} from "react";
import axiosInstance from "../../axiosInstance";

import ArticleCard from "../../Components/Card/ArticleCard";
import Filter from "../../Components/Filter/Filter";

import style from './Cards.module.css'

class Cards extends Component {
    state = {
        cards: null,
        types: null
    }

    componentDidMount() {
        this.props.loadingStart()
        axiosInstance.get('/cards.json').then((response) => {
            const cards = Object.keys(response.data).map((key) => (response.data[key]))
            console.log(cards);
            this.setState({cards: cards})
            this.props.loadingEnd()
        }).catch((err) => {
            console.log(err)
            this.props.loadingEnd()
        })
    }

    filterChanged = (type) => {
        console.log(type)
    }

    render() {
        if (this.state.cards === null) return null;

        return (
            <Fragment>
                <Filter className={style.Filter} changeHandler={this.filterChanged}/>
                <div className={style.CardsContainer}>
                    {this.state.cards.map((card, index) => {
                        return (
                            <ArticleCard
                                         key={index}
                                         title={card.card.header}
                                         text={card.card.text}
                                         image={card.card.image.imgBase64}
                                         type={card.card.type}
                                         onClick={() => this.props.clickHandler(card.fieldsetID, card.card.header)}/>
                        )
                    })}
                </div>
            </Fragment>
        )

    }
}

export default Cards

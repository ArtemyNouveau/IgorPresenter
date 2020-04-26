import React, {Component} from "react";
import {Container} from "react-bootstrap";
import {BrowserRouter, Route, Switch, NavLink, Link, withRouter} from 'react-router-dom';

import Article from "../../pages/Article/Article";
import Cards from "../../pages/Cards/Cards";

class ContentContainer extends Component {
    state = {
        loading: false,
        articleID: null,
        articleName: ''
    }

    loadingStart = () => {
        this.setState({loading: true})
    }

    loadingEnd = () => {
        this.setState({loading: false})
    }

    openHandler = (articleID, articleName = '') => {
        this.setState({articleID: articleID, articleName: articleName})
        this.props.history.push(`/article/${articleName.replace(/\W/g, '')}`)
    }

    render() {
        return (
            <Container>
                <Switch>
                    <Route path="/article">
                        <Article articleID={this.state.articleID}/>
                    </Route>
                    <Route path="/">
                            <Cards loadingStart={this.loadingStart}
                                   loadingEnd={this.loadingEnd}
                                   clickHandler={this.openHandler}/>
                    </Route>
                </Switch>
            </Container>
        )
    }
}

export default withRouter(ContentContainer)

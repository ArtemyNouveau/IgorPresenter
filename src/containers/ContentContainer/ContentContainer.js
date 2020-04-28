import React, {Component, Fragment} from "react";
import {Container, Row, Col, Button, Accordion, Card, Spinner, Breadcrumb} from "react-bootstrap";
import {BrowserRouter, Route, Switch, NavLink, Link, withRouter} from 'react-router-dom';

import Article from "../../pages/Article/Article";
import Cards from "../../pages/Cards/Cards";
import Filter from "../../Components/Filter/Filter";

import styles from './ContentContainer.module.css'

class ContentContainer extends Component {
    state = {
        loading: false,
        articleID: null,
        articleName: '',
        filterParams: []
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

    filterChanged = (type) => {
        this.setState(prevState => {
            if (prevState.filterParams.includes(type)) {
                return {filterParams: prevState.filterParams.filter((param) => (type !== param))}
            } else {
                return {filterParams: prevState.filterParams.concat([type])}
            }
        })
    }

    render() {
        console.log(this.state.filterParams)
        return (
            <Fragment>
                {this.state.loading ?
                    <div className={styles.Spinner}>
                        <Spinner animation="border"
                                 role="status">
                            <span className="sr-only">Loading...</span>
                        </Spinner>
                    </div> :
                    null
                }
                <Switch>
                    <Route path="/article">
                        <Breadcrumb>
                            <Breadcrumb.Item onClick={() => this.props.history.push('/')}>Home</Breadcrumb.Item>
                            <Breadcrumb.Item active>
                                {this.state.articleName}
                            </Breadcrumb.Item>
                        </Breadcrumb>
                        <Container>
                            <Article articleID={this.state.articleID}/>
                        </Container>
                    </Route>
                    <Route path="/">
                        <Container>
                            <Cards loadingStart={this.loadingStart}
                                   loadingEnd={this.loadingEnd}
                                   clickHandler={this.openHandler}
                                   filterParams={this.state.filterParams}/>
                        </Container>
                        <Accordion style={{position: "absolute", bottom: 0, left: 0, width: "100%"}}>
                            <Card>
                                <Accordion.Collapse eventKey="0">
                                    <Filter className={styles.FilterTop}
                                            inline
                                            changeHandler={this.filterChanged}/>
                                </Accordion.Collapse>
                                <Card.Header>
                                    <Accordion.Toggle as={Button}
                                                      variant="link"
                                                      eventKey="0">
                                        Filter
                                    </Accordion.Toggle>
                                </Card.Header>
                            </Card>
                        </Accordion>
                    </Route>
                </Switch>
            </Fragment>
        )
    }
}

export default withRouter(ContentContainer)

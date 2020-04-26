import React from "react";
import {Card} from "react-bootstrap";

import styles from './Card.module.css'

const articleCard = (props) => {
    return (
        <Card className={[styles.Card, props.className].join(' ')} onClick={props.onClick} style={{}}>
            <Card.Img className={styles.Img} variant="top" src={props.image} alt="upload image(("/>
            <Card.Body>
                <Card.Title>{props.title}</Card.Title>
                <Card.Text>{props.text}</Card.Text>
            </Card.Body>
            <Card.Footer>
                <small className="text-muted">{props.type}</small>
            </Card.Footer>
        </Card>
    )
}

export default articleCard

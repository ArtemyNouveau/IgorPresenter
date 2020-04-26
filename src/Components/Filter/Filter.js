import React from "react";
import {Form} from "react-bootstrap";

import types from './types';

import styles from './Filter.module.css';

const filter = (props) => {
    return (
        <Form className={[styles.FilterContainer, props.className].join(' ')}>
            {types.map((type, index) => {
                return (
                    <Form.Check key={index}
                                type={"checkbox"}
                                label={type}
                                onChange={() => props.changeHandler(type)}
                    />
                )
            })}
        </Form>
    )
}

export default filter

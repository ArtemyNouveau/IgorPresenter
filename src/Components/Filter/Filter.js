import React from "react";
import {Form} from "react-bootstrap";

import types from './types';

import styles from './Filter.module.css';

const filter = (props) => {
    return (
        <Form className={styles.FilterContainer}>
            {types.map((type, index) => {
                return (
                    <Form.Check key={index}
                                id={type + "_" + index}
                                type={"checkbox"}
                                inline={props.inline}
                                label={type}
                                onChange={() => props.changeHandler(type)}
                    />
                )
            })}
        </Form>
    )
}

export default filter

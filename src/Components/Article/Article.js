import React from "react";

import * as inputType from "../../inputTypes";
import styles from './Article.module.css'

const article = (props) => {
    if (!props.fieldset) return (<div/>);
    return (
        <div>
            {
                props.fieldset.map((field, index) => {
                        switch (field.inputType) {
                            case inputType.text:
                                return (
                                    <p key={index}
                                       className={styles.Text}>
                                        {field.text}
                                    </p>
                                );
                            case inputType.link:
                                return (
                                    <a key={index}
                                       target="_blank"
                                       className={styles.Link}
                                       href={field.url}>
                                        {field.text}
                                    </a>
                                );
                            case inputType.image:
                                return (
                                    <div className={styles.Image}
                                         key={index}>
                                        <img src={field.imgBase64} alt="can't display:("/>
                                    </div>
                                );
                            case inputType.header:
                                return (
                                    <h3 key={index}>
                                        {field.text}
                                    </h3>
                                );
                            case inputType.gap:
                                return <br key={index}/>
                            default:
                                return null
                        }
                    }
                )
            }
        </div>
    )
};

export default article

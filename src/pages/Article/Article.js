import React, {Component} from "react";

import axiosInstance from "../../axiosInstance";
import * as inputType from './fieldTypes'

import styles from './Article.module.css'

class Article extends Component {
    state = {
        fieldset: null
    }

    componentDidMount() {
        console.log(this.props.articleID)
        axiosInstance.get(`/articles/${this.props.articleID}.json`).then((response) => {
            this.setState({fieldset: response.data.fields})
        }).catch((err) => {
            console.log(err)
        })
    }

    render() {
        if (this.state.fieldset === null) return null;

        return this.state.fieldset.map((field, index) => {
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
        );
    }
}

export default Article

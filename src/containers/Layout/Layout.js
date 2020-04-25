import React, {Component, Fragment} from "react";

import {Container} from "react-bootstrap"

class Layout extends Component{
    render() {
        return (
            <Fragment>
                <header>
                </header>
                <main>
                    <Container>
                        {this.props.children}
                    </Container>
                </main>
                <footer>

                </footer>
            </Fragment>
        );
    }
}

export default Layout

import React, {Component, Fragment} from "react";

import Header from "../../Components/Header/Header";

class Layout extends Component {
    render() {
        return (
            <Fragment>
                <header>
                    <Header/>
                </header>
                <main>
                    {this.props.children}
                </main>
                <footer>

                </footer>
            </Fragment>
        );
    }
}

export default Layout

import React from 'react';

import Layout from "./containers/Layout/Layout";
import ContentContainer from "./containers/ContentContainer/ContentContainer";
import {BrowserRouter} from "react-router-dom";

function App() {
    return (
        <Layout>
            <BrowserRouter>
                <ContentContainer/>
            </BrowserRouter>
        </Layout>
    );
}

export default App;

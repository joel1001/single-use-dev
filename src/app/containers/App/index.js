import React, { useState, useEffect } from "react";
import  { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import { createMemoryHistory } from 'history';
import HomePage from "../HomePage/HomePage";
import AddPresetPage from "../AddPresetPage/AddPresetPage";
import NewDesignPage from "../NewDesignPage/NewDesignPage";
import PdfDocument from "../PdfGenerator/pdfGenerator";

export const history = createMemoryHistory();

const App = (props) => {

    return (
        <Router history={history}>
            <Switch>
                <Route path = "/" exact={true} component={HomePage} />
                <Route exact path = "/add-preset/:id?/:twoDasset?" component={AddPresetPage} />
                <Route path = "/new-design" component={NewDesignPage} />
                <Route path = "/pdf-page" component={PdfDocument} />
            </Switch>
        </Router>
    );
};

export default App;

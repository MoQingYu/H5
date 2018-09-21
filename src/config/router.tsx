import * as React from "react";
import { Frame } from "./frame";
import createBrowserHistory from 'history/createBrowserHistory';
import { Router, Route } from "react-router-dom";
const hashHistory = createBrowserHistory();
console.log(hashHistory);
export const router = (
    <Router history={hashHistory}>
        <Route path="/" component={Frame}></Route>
    </Router>
)
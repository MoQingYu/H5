import * as React from "react";
import { Frame } from "./frame";
import { Router, Route, hashHistory } from "react-router";
import * as test from "react-router";
console.log(hashHistory);
export const router = (
    <Router>
        <Route path="/" component={Frame}></Route>
    </Router>
)
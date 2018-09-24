import * as React from "react";
import { Frame } from "./frame";
import createBrowserHistory from 'history/createBrowserHistory';
import { Route, BrowserRouter } from "react-router-dom";
import { HomePage } from "../page/";

const hashHistory = createBrowserHistory();

export const router = (
	<BrowserRouter>
		<Frame history={hashHistory}>
			<Route path="/" component={HomePage}></Route>
		</Frame>
	</BrowserRouter>
)
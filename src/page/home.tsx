import * as React from 'react';
import { Component } from "react";
import { Button } from "antd";
import http from "../public/http";

interface HomePageProps { };
interface HomePageState { };
export class HomePage extends Component<HomePageProps, HomePageState> {
	constructor() {
		super();
	}

	render() {
		return <div>
			<Button onClick={this.handleClick.bind(this)}>点我</Button>
		</div>;	
	}

	async handleClick() {
		http("http://127.0.0.1:8081/").then((res)=>{
			console.log(res);
		})
	}
}
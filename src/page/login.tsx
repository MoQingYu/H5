import * as React from 'react';
import { Component } from "react";
import { Modal } from "antd";
import http from "../public/http";

interface LoginPageProps { };
interface LoginPageState { };
export class LoginPage extends Component<LoginPageProps, LoginPageState> {
	constructor() {
		super();
	}

	render() {
		return <Modal title="Sign in" 
      visible={true}>

		</Modal>;	
	}

}

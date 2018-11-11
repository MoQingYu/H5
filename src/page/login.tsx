import * as React from 'react';
import { Component } from "react";
import { Modal } from "antd";
import { ajax } from "../public/http";

interface LoginPageProps { 
	onCancel?: ()=>void,
 };
interface LoginPageState { };
export class LoginPage extends Component<LoginPageProps, LoginPageState> {
	constructor() {
		super();
	}

	render() {
		const { onCancel } = this.props;
		return <Modal title="Sign in" visible={true}
			onCancel={onCancel}>
			Sign In
		</Modal>;	
	}

}

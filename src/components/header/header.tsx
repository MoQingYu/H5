import * as React from 'react';
import { Component } from "react";
import { LoginPage } from "../../page"
import { Form } from 'antd';

interface VWHeaderProps { }
interface VWHeaderStates { 
	showSignIn: Boolean,
 }

class VWHeader extends Component<VWHeaderProps, VWHeaderStates>{
	constructor(props, context) {
		super();
		this.state = {
			showSignIn: false,
		};
	}

	render() {
		const { showSignIn } = this.state;
		return <div className="vw-header">
			<div className="vw-logo">
				<img src="http://www.runoob.com/wp-content/uploads/2016/02/react.png" />
				<span>REACT-DEMO</span>
			</div>
			<div className="vw-sign">
				<a href="javascript:;" onClick={this.handleSignIn.bind(this)}>Sign in</a>
				<span>|</span>
				<a href="javascript:;">Sign up</a>
			</div>
			{ showSignIn && <LoginPage onCancel={()=> this.setState({showSignIn:false})} /> }
		</div>
	}

	handleSignIn() {
		this.setState({showSignIn: true})
	}
}

export default Form.create()(VWHeader);
import * as React from 'react';
import { Component } from "react";
import { Layout, Menu, Button } from "antd";
import { render } from 'react-dom';
import * as ReactDOM from "react-dom";

interface HeadrPageProps {}
interface HeadrPageStates {}


export class HeaderPage extends Component<HeadrPageProps,HeadrPageStates>{
    constructor(props,context){
      super();
      this.state={};
    }

    render() {
      return <div> 
            <div className="floatleft">
                <div>
                    {/* <img src="../allimg/logo/logo.jpg" alt="logo"/> */}
                    <span className="logo">MyFamily</span>
                </div>
            </div>
            <div className="floatright">
                <Button type="primary" ghost>登录</Button>
            </div>
            <Menu
                theme="dark"
                mode="horizontal"
                defaultSelectedKeys={['2']}
                style={{ lineHeight: '64px' }}>
                <Menu.Item key="1">nav 1</Menu.Item>
                <Menu.Item key="2">nav 2</Menu.Item>
                <Menu.Item key="3">nav 3</Menu.Item>
            </Menu>
        </div>
    }
}
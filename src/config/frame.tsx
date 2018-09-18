import * as React from 'react';
import { Component } from "react";
import { Layout } from "antd";
import { render } from 'react-dom';
import * as ReactDOM from "react-dom";
import { VWHeader } from "../components/header/header";
import '../public/common.less';
const { Header, Content, Sider } = Layout;
interface FrameProps { }
interface FrameStates {
 showContent?: boolean;
}

export class Frame extends Component<FrameProps, FrameStates>{
 constructor(props, context) {
  super();
  this.state = {
  };
 }

 render() {
  return <Layout className="vw-layout" style={{ minHeight: "100vh" }}>
   <Header> <VWHeader/> </Header>
   <Layout>
    <Sider>Sider</Sider>
    <Content>Content</Content>
   </Layout>
  </Layout>
 }
}
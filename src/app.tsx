import * as React from 'react';
import { Component } from "react";
import { Layout } from "antd";
import { Provider } from "react-redux"
import { render } from "react-dom";
import CommentApp from './CommentApp'
import './static/common.less';
import store from "./redux";

const { Header, Content, Footer } = Layout;

interface HomePageProps {}
interface HomePageStates {
  showContent?: boolean;
}


export class HomePage extends Component<HomePageProps,HomePageStates>{
  constructor(props,context){
    super(props,context);
    this.state={
    };
  }

  render() {
    return <div>
      <Layout>
        <Content>
          <CommentApp />
        </Content>
      </Layout>
    </div>
  }
}
render(
  <Provider store={store}>
    <HomePage/>
  </Provider>
  ,document.getElementById("app"))
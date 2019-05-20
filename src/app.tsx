import * as React from 'react';
import { Component } from "react";
import { Layout } from "antd";
import * as ReactDOM from "react-dom";
import CommentApp from './CommentApp'
import './static/common.less';

const { Header, Content, Footer } = Layout;

interface HomePageProps {}
interface HomePageStates {
  showContent?: boolean;
}


export class HomePage extends Component<HomePageProps,HomePageStates>{
  constructor(props,context){
    super();
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

ReactDOM.render(<HomePage/>,document.getElementById("app"))
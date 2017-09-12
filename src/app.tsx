import * as React from 'react';
import { Component } from "react";
import { Layout } from "antd";
import { render } from 'react-dom';
import * as ReactDOM from "react-dom";
import { HeaderPage } from "./control/header";
import { ContentPage } from "./control/content";
import './public/common.less';

interface HomePageProps {}
interface HomePageStates {}


export class HomePage extends Component<HomePageProps,HomePageStates>{
    constructor(props,context){
      super();
      this.state={};
    }

    render() {
      const { Header, Content, Footer } = Layout;
      return <div>
              <Layout>
                <Header className="pageheader">
                  <HeaderPage/>
                </Header>
                <Content>
                  <ContentPage></ContentPage>
                </Content>
                <Footer>Footer</Footer>
              </Layout>
            </div>
    }
}

ReactDOM.render(<HomePage/>,document.getElementById("app"))
import * as React from 'react';
import { Component } from "react";
import { Layout } from "antd";
import { render } from 'react-dom';
import * as ReactDOM from "react-dom";
import { HeaderPage } from "./control/header";
import { ContentPage } from "./control/content";
import './public/common.less';

interface HomePageProps {}
interface HomePageStates {
  showContent?: boolean;
}


export class HomePage extends Component<HomePageProps,HomePageStates>{
    constructor(props,context){
      super();
      this.state={
        showContent: true
      };
    }

    contentShowOrHide() {
      this.setState({ showContent: !this.state.showContent })
    }

    render() {
      const { Header, Content, Footer } = Layout;
      const { showContent } = this.state;
      return <div>
              <Layout>
                <Header className="pageheader">
                  <HeaderPage/>
                </Header>
                <Content>
                  {showContent ? <ContentPage/> : undefined}
                  <button onClick={this.contentShowOrHide.bind(this)}>{"点我一下"}</button>
                </Content>
                <Footer>Footer</Footer>
              </Layout>
            </div>
    }
}

ReactDOM.render(<HomePage/>,document.getElementById("app"))
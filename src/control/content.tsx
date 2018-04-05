import * as React from 'react';
import { Component } from "react";
import { Layout, Menu, Button } from "antd";
import { render } from 'react-dom';
import * as ReactDOM from "react-dom";

interface ContentPageProps {}
interface ContentPageStates {
}

export class ContentPage extends Component<ContentPageProps,ContentPageStates>{
    constructor(props,context){
      super();
      this.state={

      };
    }

    render() {
        return <div className="content"> 
                <h1>Hello World</h1>
            </div>
    }
}
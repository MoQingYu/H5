import * as React from 'react';
import { Component } from "react";
import { CommentApp } from './components/CommentApp';

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
                <CommentApp />
            </div>
    }
}
import * as React from 'react';
import { Component } from "react";
import { CommentApp } from './components/CommentApp';
import HeadContent from './reduxdemo/HeadContent';
import { store } from '../redux/redux-demo';

interface ContentPageProps {
}
interface ContentPageStates {
}

export class ContentPage extends Component<ContentPageProps,ContentPageStates>{
    static childContextTypes = {
        store: React.PropTypes.any
    }
    
    constructor(props, context){
      super();
      this.state={
      };
    } 

    getChildContext() {
        return { store }
    }

    render() {
        return <div className="content"> 
                <h1>Hello World</h1>
                <CommentApp />
                <HeadContent />
            </div>
    }
}